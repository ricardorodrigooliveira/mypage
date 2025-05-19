import { useState, useContext } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;
console.log('API URL:', apiUrl);

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const { token, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: senha }),
      });

      if (!response.ok) throw new Error("Login inválido");

      const data = await response.json();
      login(data.token);
      setShowLoginForm(false);
      setDropdownOpen(false);
      navigate("/"); // volta pra Home mostrando formulário
    } catch {
      setErro("E-mail ou senha inválidos");
    }
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    setShowLoginForm(false);
    navigate("/");
  };

  return (
    <header className="flex justify-end items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="User menu"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="Avatar do usuário"
              className="w-10 h-10 rounded-full"
            />
            <span className="hidden md:block text-gray-700 dark:text-gray-200 font-semibold">
              Usuário
            </span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 px-4 z-50">
              {!token ? (
                <>
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-2 p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="w-full mb-2 p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
                  />
                  {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}
                  <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    Entrar
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-4"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
