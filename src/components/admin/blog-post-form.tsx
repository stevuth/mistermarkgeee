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
import { useAuth, useFirestore } from "@/firebase/provider";
import { setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { collection, doc } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import type { BlogPost } from "./blog-post-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  author: z.string().min(1, "Author is required"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
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

  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      author: "",
      imageUrl: "",
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
    } else {
        form.reset({
            title: "",
            content: "",
            author: "",
            imageUrl: "",
            summary: "",
            tags: "",
        });
    }
  }, [postToEdit, form]);

  const onSubmit = (values: BlogPostFormValues) => {
    if (!auth.currentUser || !firestore) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "You must be logged in.",
      });
      return;
    }
    
    const tagsArray = values.tags.split(",").map((tag) => tag.trim());

    if (isEditing && postToEdit) {
      // Update existing post
      const postRef = doc(firestore, "blogPosts", postToEdit.id);
      const updatedData = {
        ...postToEdit,
        ...values,
        tags: tagsArray,
      };
      setDocumentNonBlocking(postRef, updatedData, { merge: true });
      toast({
        title: "Success!",
        description: "Blog post has been updated.",
      });
    } else {
      // Create new post
      const newPostRef = doc(collection(firestore, "blogPosts"));
      const blogPostData = {
        ...values,
        tags: tagsArray,
        datePublished: new Date().toISOString(),
        id: newPostRef.id,
      };
      setDocumentNonBlocking(newPostRef, blogPostData, {});
      toast({
        title: "Success!",
        description: "Blog post has been submitted for creation.",
      });
    }

    form.reset({
        title: "",
        content: "",
        author: "",
        imageUrl: "",
        summary: "",
        tags: "",
    });
    if(onFormSubmit) {
      onFormSubmit();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? `Editing "${postToEdit?.title}"` : "Create New Blog Post"}</CardTitle>
      </CardHeader>
      <CardContent>
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
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              <Button type="submit">{isEditing ? "Update Post" : "Create Post"}</Button>
              {isEditing && (
                <Button variant="outline" type="button" onClick={() => onFormSubmit?.()}>
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
