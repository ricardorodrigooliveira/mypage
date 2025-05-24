import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router-dom";
import PostForm from "./components/PostForm";

export default function NovaPostagem() {
  const { user } = useAuth();

  // Verifica se o usuário está autenticado
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Nova Postagem</h1>
      <PostForm />
    </div>
  );
}
