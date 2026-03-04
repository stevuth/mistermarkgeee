
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
import { Eye, EyeOff } from "lucide-react";

export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const { toast } = useToast();
  
  // Updated credentials per user request
  const [email, setEmail] = useState("mark.gaturuku@gmail.com");
  const [password, setPassword] = useState("mistermarkgee");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRoleLoading, setIsRoleLoading] = useState(true);

  const [postToEdit, setPostToEdit] = useState<BlogPost | null>(null);
  const [accordionValue, setAccordionValue] = useState("");

  const handleSignIn = async () => {
    setError(null);
    setIsProcessing(true);
    const targetEmail = email.trim().toLowerCase();

    try {
      // 1. Try to sign in
      await signInWithEmailAndPassword(auth, targetEmail, password);
    } catch (signInError: any) {
      // 2. If user doesn't exist (or generic invalid-credential in new Firebase versions)
      const isBootstrapEmail = targetEmail === 'mark.gaturuku@gmail.com';
      const shouldTryBootstrap = signInError.code === 'auth/user-not-found' || signInError.code === 'auth/invalid-credential';

      if (isBootstrapEmail && shouldTryBootstrap) {
        try {
          // 3. Attempt to create the admin account
          await createUserWithEmailAndPassword(auth, targetEmail, password);
          toast({
            title: "Admin Account Created",
            description: "A new admin account has been successfully set up for you.",
          });
        } catch (signUpError: any) {
          if (signUpError.code === 'auth/email-already-in-use') {
            setError('The admin account already exists, but the password entered is incorrect. Please try a different password or use the "Forgot Password" link.');
          } else {
            setError(`Admin Setup Error: ${signUpError.message}`);
          }
        }
      } else if (signInError.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else {
        setError(`Sign In Error: ${signInError.message}`);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email.trim());
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
                    type="button"
                    className="p-0 h-auto text-xs" 
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </Button>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                   <p className="text-destructive text-sm font-medium">{error}</p>
                </div>
              )}
              <Button onClick={handleSignIn} className="w-full" disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Sign In"}
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
            <p className="mb-2">You do not have permission to view this page. Your User ID is:</p>
            <code className="bg-secondary p-2 rounded mb-4 block select-all">{user.uid}</code>
            <p className="text-sm text-muted-foreground">Add this UID to the "roles_admin" collection in Firestore to grant access.</p>
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
