import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export type Post = {
  id: number;
  titulo: string;
  conteudo: string;
  text: string;
  arquivo?: string;
  file?: string;
  createdAt: string;
};

type PostFormProps = {
  onAddPost: (post: Post) => void;
};

export default function PostForm({ onAddPost }: PostFormProps) {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

  const apiUrl = import.meta.env.VITE_API_URL;
  
  const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("conteudo", conteudo);
    if (file) formData.append("arquivo", file);
    if (image) formData.append("image", image);

    try {
        const token = localStorage.getItem("token"); // Recupera o token salvo no login

        if (!token) {
            alert("Você precisa estar logado para postar.");
            return;
        }

        //const response = await fetch(`${apiUrl}/posts`, {
        const endpoint = file ? `${apiUrl}/posts/upload` : `${apiUrl}/posts`;
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
            Authorization: `Bearer ${token}`, // ← cabeçalho com token
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Erro ao criar postagem");
        }

        const postCriado = await response.json();

        const newPost: Post = {
            id: postCriado.id,
            titulo: postCriado.titulo,
            conteudo: postCriado.conteudo,
            text: postCriado.text,
            arquivo: image ? URL.createObjectURL(image) : undefined,
            file: file ? file.name : undefined,
            createdAt: postCriado.createdAt,
        };

        onAddPost(newPost);

        setTitulo("");
        setConteudo("");
        setText("");
        setImage(null);
        setFile(null);
    } catch (err) {
        console.error("Erro ao enviar post:", err);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFile(file);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded p-4 mb-6 space-y-3">
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        required
      />

      <textarea
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        placeholder="Conteúdo (exibido no backend)"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        rows={2}
        required
      />

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Texto livre (exibido no frontend)"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        rows={2}
      />

      <div className="flex gap-4 mb-2">
        <label className="cursor-pointer">
          📷 <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
        </label>
        <label className="cursor-pointer">
          📎 <input type="file" onChange={handleFileChange} className="hidden" />
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
      >
        Publicar
      </button>
    </form>
  );
}
