import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Post } from "../types";

type PostFormProps = {
  onAddPost?: (post: Post) => void;
};

export default function PostForm({ onAddPost }: PostFormProps) {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [text, setText] = useState("");
  const [categoria, setCategoria] = useState("feed");
  const [image, setImage] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const apiUrl = import.meta.env.VITE_API_URL;
    const formData = new FormData();

    formData.append("titulo", titulo);
    formData.append("conteudo", conteudo);
    formData.append("text", text);
    formData.append("categoria", categoria);
    if (file) formData.append("arquivo", file);
    if (image) formData.append("image", image);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Você precisa estar logado para postar.");
        return;
      }

      const endpoint = file ? `${apiUrl}/posts/upload` : `${apiUrl}/posts`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error("Erro ao criar postagem");

      const postCriado = await response.json();

      const newPost: Post = {
        id: postCriado.id,
        titulo: postCriado.titulo,
        conteudo: postCriado.conteudo,
        text: postCriado.text,
        categoria: postCriado.categoria,
        arquivo: image ? URL.createObjectURL(image) : undefined,
        file: file ? file.name : undefined,
        data_criacao: postCriado.data_criacao,
      };

      if (onAddPost) onAddPost(newPost);

      // Resetar campos
      setTitulo("");
      setConteudo("");
      setText("");
      setCategoria("feed");
      setImage(null);
      setFile(null);
    } catch (err) {
      console.error("Erro ao enviar post:", err);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files?.[0] || null);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
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

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
      >
        <option value="feed">Feed</option>
        <option value="tiro">Tiro Esportivo</option>
        <option value="triathlon">Triathlon</option>
      </select>

      <div className="flex gap-4">
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
