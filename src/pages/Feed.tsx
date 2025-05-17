import { useState } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import type { Post } from "../components/PostForm";

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (post: Post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <PostForm onAddPost={handleAddPost} />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
