"use client";

import { useUser, useAuth, useFirestore } from "@/firebase/provider";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BlogPostForm } from "@/components/admin/blog-post-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BlogPostList, type BlogPost } from "@/components/admin/blog-post-list";

export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState<string | null>(null);
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRoleLoading, setIsRoleLoading] = useState(true);

  const [postToEdit, setPostToEdit] = useState<BlogPost | null>(null);

  const handleSignIn = async () => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (signInError: any) {
      if ((signInError.code === 'auth/user-not-found' || signInError.code === 'auth/invalid-credential') && email === 'admin@example.com') {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (signUpError: any) => {
          if (signUpError.code === 'auth/email-already-in-use') {
            setError('Incorrect password. Please try again.');
          } else {
            setError(`Error creating admin user: ${signUpError.message}`);
          }
        }
      } else if (signInError.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else {
        setError(signInError.message);
      }
    }
  };

  useEffect(() => {
    const checkAndSetAdminRole = async () => {
      if (user && firestore) {
        setIsRoleLoading(true);
        const adminRoleRef = doc(firestore, 'roles_admin', user.uid);
        try {
          const docSnap = await getDoc(adminRoleRef);
          if (docSnap.exists()) {
            setIsAdmin(true);
          } else {
            if (user.email === 'admin@example.com') {
              // Create the admin role doc if it doesn't exist for the special admin email
              setDocumentNonBlocking(adminRoleRef, {}, {});
              setIsAdmin(true); // Optimistically assume it will be created
            } else {
              setIsAdmin(false);
            }
          }
        } catch (e) {
          console.error("Error checking admin role:", e);
          setError("Could not verify admin role. Please check Firestore permissions.");
          setIsAdmin(false);
        } finally {
          setIsRoleLoading(false);
        }
      } else {
        setIsAdmin(false);
        setIsRoleLoading(false);
      }
    };

    if (!isUserLoading) {
      checkAndSetAdminRole();
    }
  }, [user, isUserLoading, firestore]);
  
  useEffect(() => {
    if (postToEdit) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [postToEdit]);


  if (isUserLoading || isRoleLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button onClick={handleSignIn} className="w-full">
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAdmin) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p>You do not have permission to view this page.</p>
            <Button onClick={() => auth.signOut()} className="mt-4">Sign Out</Button>
        </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <BlogPostForm postToEdit={postToEdit} onFormSubmit={() => setPostToEdit(null)} />
      <Separator className="my-12" />
      <BlogPostList onEditClick={setPostToEdit} />
    </div>
  );
}
