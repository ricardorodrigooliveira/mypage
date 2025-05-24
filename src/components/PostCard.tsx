import type { Post } from "../types";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = post.data_criacao
    ? new Date(post.data_criacao).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-4 flex flex-col relative">
      {post.text && <p className="mb-2 text-gray-900 dark:text-white">{post.text}</p>}

      {post.titulo && (
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {post.titulo}
        </h2>
      )}

      {post.conteudo && (
        <p className="mb-2 text-gray-900 dark:text-white">{post.conteudo}</p>
      )}

      {post.arquivo && (
        <img
          src={`${import.meta.env.VITE_API_URL}/uploads/${post.arquivo}`}
          alt="Post"
          className="w-full max-h-96 object-contain rounded mb-2"
          style={{ maxHeight: "24rem" }}
        />
      )}

      {post.file && (
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          📎 Arquivo: <strong>{post.file}</strong>
        </div>
      )}
      {/* Rodapé com a data/hora no canto inferior esquerdo */}
      {formattedDate && (
        <footer className="absolute bottom-0 right-4 text-xs text-gray-400 dark:text-gray-500">
          Publicado em {formattedDate}
        </footer>
      )}
    </div>
  );
}
