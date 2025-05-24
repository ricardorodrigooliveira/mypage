// Home.tsx - Versão 2
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import type { Post } from "../components/PostForm";
import { FaBullseye, FaSwimmer } from "react-icons/fa";

const apiUrl = import.meta.env.VITE_API_URL;

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleAddPost = (post: any) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Bem-vindo!</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Esta é a sua área principal. Use o menu lateral para navegar entre os módulos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          icon={<FaBullseye />}
          title="Tiro Esportivo"
          description="Saiba mais sobre o tiro de precisão."
          to="/tiro-esportivo"
        />
        <Card
          icon={<FaSwimmer />}
          title="Triathlon"
          description="Descubra tudo sobre natação, ciclismo e corrida."
          to="/triathlon"
        />
      </div>

      <div className="p-4 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Feed de Publicações</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">Nenhuma publicação ainda.</p>
        ) : (
          posts.map((post, index) => <PostCard key={index} post={post} />)
        )}

        {isAuthenticated && (
          <>
            <h1 className="text-2xl font-bold mt-8 mb-4">Faça uma nova publicação</h1>
            <PostForm onAddPost={handleAddPost} />
          </>
        )}
      </div>
    </div>
  );
}
