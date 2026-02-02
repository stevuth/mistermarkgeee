"use client";

import { useState } from "react";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, doc, query, orderBy } from "firebase/firestore";
import { deleteDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { Edit, Trash2 } from "lucide-react";

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  author: string;
  datePublished: string;
  tags: string[];
  imageUrl: string;
  summary: string;
};

interface BlogPostListProps {
  onEditClick: (post: BlogPost) => void;
}

export function BlogPostList({ onEditClick }: BlogPostListProps) {
  const firestore = useFirestore();
  const { toast } = useToast();
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null);

  const postsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'blogPosts'), orderBy('datePublished', 'desc'));
  }, [firestore]);

  const { data: posts, isLoading } = useCollection<BlogPost>(postsQuery);

  const handleDelete = () => {
    if (!postToDelete || !firestore) return;

    const postRef = doc(firestore, "blogPosts", postToDelete.id);
    deleteDocumentNonBlocking(postRef);

    toast({
      title: "Post Deleted",
      description: `"${postToDelete.title}" has been deleted.`,
    });
    setPostToDelete(null);
  };

  return (
    <>
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Existing Blog Posts</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && <p>Loading posts...</p>}
          {!isLoading && posts && posts.length === 0 && <p>No posts found. Create one above!</p>}
          <div className="space-y-4">
            {posts?.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div>
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    By {post.author} on {new Date(post.datePublished).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => onEditClick(post)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => setPostToDelete(post)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={!!postToDelete} onOpenChange={(open) => !open && setPostToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the post
              titled "{postToDelete?.title}".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
