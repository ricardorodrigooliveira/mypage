import type { Post } from "./PostForm";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  // Formata a data para exibir de forma legível
  const formattedDate = post.createdAt
    ? new Date(post.createdAt).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-4 flex flex-col">
      {post.text && <p className="mb-2 text-gray-900 dark:text-white">{post.text}</p>}
	  <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {post.titulo}
      </h2>

      <p className="mb-2 text-gray-900 dark:text-white">{post.conteudo}</p>
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

      {/* Rodapé com a data/hora alinhado à direita */}
      {formattedDate && (
        <footer className="mt-auto text-xs text-gray-500 dark:text-gray-400 text-right">
          Publicado em {formattedDate}
        </footer>
      )}
    </div>
  );
}
