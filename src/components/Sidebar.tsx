import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Target, Activity, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão hamburguer só no mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-800 text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-blue-800 text-white p-6 space-y-6 shadow-lg
          transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:flex md:flex-col
        `}
      >
        <div className="text-2xl font-bold tracking-tight mb-10">🏁 Meus Projetos</div>
        <nav className="flex flex-col gap-4 text-lg">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-blue-300 transition">
            <Home className="w-5 h-5" /> Home
          </Link>
          <Link to="/tiro-esportivo" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-blue-300 transition">
            <Target className="w-5 h-5" /> Tiro Esportivo
          </Link>
          <Link to="/triathlon" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-blue-300 transition">
            <Activity className="w-5 h-5" /> Triathlon
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
