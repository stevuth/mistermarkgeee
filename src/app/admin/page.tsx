
"use client";

import { useUser, useAuth, useFirestore } from "@/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
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
import { ChangePasswordForm } from "@/components/admin/change-password-form";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [email, setEmail] = useState("mark.gaturuku@gmail.com");
  const [password, setPassword] = useState("mistermarkgee");
  const [error, setError] = useState<string | null>(null);
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRoleLoading, setIsRoleLoading] = useState(true);

  const [postToEdit, setPostToEdit] = useState<BlogPost | null>(null);
  const [accordionValue, setAccordionValue] = useState("");

  const handleSignIn = async () => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (signInError: any) {
      // Bootstrap logic: Create the admin user if it's the specific email and doesn't exist
      if ((signInError.code === 'auth/user-not-found' || signInError.code === 'auth/invalid-credential') && email === 'mark.gaturuku@gmail.com') {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          toast({
            title: "Admin Created",
            description: "A new admin account has been created for you.",
          });
        } catch (signUpError: any) {
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

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast({
        title: "Reset Email Sent",
        description: `A password reset link has been sent to ${email}`,
      });
    } catch (err: any) {
      setError(err.message);
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
            if (user.email === 'mark.gaturuku@gmail.com') {
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
      setAccordionValue("blog-post-form");
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-xs" 
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </Button>
                </div>
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
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p>You do not have permission to view this page. Please sign out and log in with an admin account.</p>
        </div>
    );
  }

  const handleFormSubmit = () => {
    setPostToEdit(null);
    setAccordionValue("");
  };

  return (
    <div className="container mx-auto py-10 pt-24">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </div>

      <Accordion type="single" collapsible className="w-full" value={accordionValue} onValueChange={setAccordionValue}>
        <AccordionItem value="blog-post-form">
          <AccordionTrigger className="hover:no-underline text-xl font-semibold">
            {postToEdit ? `Editing "${postToEdit.title}"` : "Create New Blog Post"}
          </AccordionTrigger>
          <AccordionContent>
            <BlogPostForm postToEdit={postToEdit} onFormSubmit={handleFormSubmit} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator className="my-12" />
      <BlogPostList onEditClick={setPostToEdit} />
      <Separator className="my-12" />
      <ChangePasswordForm />
    </div>
  );
}
