// src/components/Header.tsx
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '@mui/material';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md sticky top-0 z-40">
      <Link to="/home" className="text-xl font-bold text-blue-800 hover:underline">
        Home
      </Link>

      <div className="flex items-center gap-4">
        {user && (
          <Link
            to="/nova-postagem"
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Nova Postagem
          </Link>
        )}

        {user && (
          <div className="flex items-center gap-2">
            <Avatar sx={{ width: 32, height: 32 }}>
              {user.name?.charAt(0).toUpperCase()}
            </Avatar>
            <span className="text-sm font-medium">{user.name}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
