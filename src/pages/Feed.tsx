import { useState, useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import type { Post } from "../types";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPosts(response.data);
    } catch (error) {
      console.error("Erro ao carregar postagens", error);
    }
  };

  const handleAddPost = (post: Post) => {
    setPosts([post, ...posts]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4">
      <PostForm onAddPost={handleAddPost} />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
