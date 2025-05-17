import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export type Post = {
  id: number;
  text: string;
  image?: string;
  file?: string;
  createdAt: string; // ISO string da data/hora da publicação
};

type PostFormProps = {
  onAddPost: (post: Post) => void;
};

export default function PostForm({ onAddPost }: PostFormProps) {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newPost: Post = {
      id: Date.now(),
      text,
      image: image ? URL.createObjectURL(image) : undefined,
      file: file ? file.name : undefined,
      createdAt: new Date().toISOString(), // data/hora atual em ISO
    };

    onAddPost(newPost);
    setText("");
    setImage(null);
    setFile(null);
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
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded p-4 mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escreva algo..."
        className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white"
        rows={3}
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
