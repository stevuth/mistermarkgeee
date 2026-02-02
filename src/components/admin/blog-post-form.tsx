
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAuth, useFirestore } from "@/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import type { BlogPost } from "./blog-post-list";
import { Card, CardContent } from "@/components/ui/card";


const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  author: z.string().min(1, "Author is required"),
  summary: z.string().min(1, "Summary is required"),
  tags: z.string(),
});

type BlogPostFormValues = z.infer<typeof formSchema>;

interface BlogPostFormProps {
  postToEdit?: BlogPost | null;
  onFormSubmit?: () => void;
}

export function BlogPostForm({ postToEdit, onFormSubmit }: BlogPostFormProps) {
  const auth = useAuth();
  const firestore = useFirestore();
  const { toast } = useToast();
  const isEditing = !!postToEdit;

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      author: "",
      summary: "",
      tags: "",
    },
  });

  useEffect(() => {
    if (postToEdit) {
      form.reset({
        ...postToEdit,
        tags: postToEdit.tags.join(", "),
      });
      setImageFile(null);
    } else {
        form.reset({
            title: "",
            content: "",
            author: "",
            summary: "",
            tags: "",
        });
        setImageFile(null);
    }
  }, [postToEdit, form]);

  const onSubmit = async (values: BlogPostFormValues) => {
    if (!auth.currentUser || !firestore) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "You must be logged in and services must be available.",
      });
      return;
    }

    setIsSubmitting(true);
    let imageUrl = postToEdit?.imageUrl || "";

    try {
      if (imageFile) {
        // --- Cloudinary Upload Logic ---
        const CLOUDINARY_CLOUD_NAME = "dni2duulw";
        const CLOUDINARY_UPLOAD_PRESET = "stevuth";

        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Cloudinary upload failed: ${errorData.error.message}`);
        }

        const data = await response.json();
        imageUrl = data.secure_url;
        // --- End of Cloudinary Logic ---
      }
      
      const postId = isEditing && postToEdit ? postToEdit.id : doc(collection(firestore, "blogPosts")).id;
      
      const postRef = doc(firestore, "blogPosts", postId);
      
      const blogPostData = {
        ...values,
        id: postId,
        tags: values.tags.split(",").map((tag) => tag.trim()),
        imageUrl,
        datePublished: isEditing && postToEdit ? postToEdit.datePublished : new Date().toISOString(),
      };

      await setDoc(postRef, blogPostData, { merge: true });

      toast({
        title: "Success!",
        description: `Blog post has been ${isEditing ? 'updated' : 'submitted'}.`,
      });

      form.reset({
        title: "", content: "", author: "", summary: "", tags: "",
      });
      setImageFile(null);
      if(onFormSubmit) {
        onFormSubmit();
      }

    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "There was a problem saving the post. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Blog Post Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Blog post content..." {...field} rows={15} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Author's Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormItem>
                <FormLabel>Featured Image</FormLabel>
                <FormControl>
                  <Input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)} 
                    disabled={isSubmitting}
                  />
                </FormControl>
                {postToEdit?.imageUrl && !imageFile && (
                  <div className="text-sm text-muted-foreground mt-2">
                    Current image: <a href={postToEdit.imageUrl} target="_blank" rel="noopener noreferrer" className="underline">View Image</a>. Upload a new one to replace it.
                  </div>
                )}
                <FormMessage />
              </FormItem>
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Summary</FormLabel>
                  <FormControl>
                    <Textarea placeholder="A brief summary of the post" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (comma-separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="tech, lifestyle, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : isEditing ? 'Update Post' : 'Create Post'}
              </Button>
              {isEditing && (
                <Button variant="outline" type="button" onClick={() => onFormSubmit?.()} disabled={isSubmitting}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
