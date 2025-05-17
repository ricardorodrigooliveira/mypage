import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import TiroEsportivo from './pages/TiroEsportivo';
import Triathlon from './pages/Triathlon';
import Feed from "./pages/Feed";
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-800 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/tiro-esportivo" element={<TiroEsportivo />} />
            <Route path="/triathlon" element={<Triathlon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
