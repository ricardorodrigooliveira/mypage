import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const apiUrl = import.meta.env.VITE_API_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    setErro("");

    try {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

      const data = await response.json();

      // Salva o token e dados do usuário no contexto de autenticação
      login(data.user, data.token);

      // Redireciona para o feed
      navigate("/feed");
    } catch (err: any) {
      console.error("Erro ao fazer login:", err);
      setErro("E-mail ou senha inválidos.");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 shadow-lg rounded bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Login
      </h2>

      {erro && (
        <div className="mb-4 text-red-600 bg-red-100 px-3 py-2 rounded">
          {erro}
        </div>
      )}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu e-mail"
        className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:text-white"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Sua senha"
        className="w-full mb-4 p-2 border rounded dark:bg-gray-700 dark:text-white"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        Entrar
      </button>
    </div>
  );
}
