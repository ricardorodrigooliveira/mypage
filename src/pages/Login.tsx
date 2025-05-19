import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiUrl = "https://mypage-backend.up.railway.app";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErro("");

    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/feed"); // redireciona para o feed
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
        value={senha}
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
