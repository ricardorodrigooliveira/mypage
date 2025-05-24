import { Routes, Route } from 'react-router-dom';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import TiroEsportivo from './pages/TiroEsportivo';
import Triathlon from './pages/Triathlon';
import NotFound from './pages/NotFound';
import NovaPostagem from './NovaPostagem';

function App() {
  return (
      <AuthProvider>
        <ResponsiveDrawer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tiro-esportivo" element={<TiroEsportivo />} />
            <Route path="/triathlon" element={<Triathlon />} />
            <Route path="/nova-postagem" element={<NovaPostagem />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ResponsiveDrawer>
      </AuthProvider>
  );
}

export default App;
