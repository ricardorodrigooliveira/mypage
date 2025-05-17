import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    alert('Logout executado!');
    // Aqui você pode implementar o logout real
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
            <span className="hidden md:block text-gray-700 dark:text-gray-200 font-semibold">Usuário</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
