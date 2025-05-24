import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Post = {
  id: number;
  titulo: string;
  conteudo: string;
  arquivo?: string;
};

const Feed = () => {
  const { user, token } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Erro ao buscar postagens:', error);
      }
    };

    if (user) fetchPosts();
  }, [user, token]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Feed</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded shadow-sm bg-white">
            <h2 className="font-semibold">{post.titulo}</h2>
            <p>{post.conteudo}</p>
            {post.arquivo && (
              <a
                href={`${import.meta.env.VITE_API_URL}/${post.arquivo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Ver arquivo
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;