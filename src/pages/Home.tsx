import Card from "../components/Card";
import { FaBullseye, FaSwimmer } from "react-icons/fa";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Bem-vindo!</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Esta é a sua área principal. Use o menu lateral para navegar entre os módulos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card
        icon={<FaBullseye />}
        title="Tiro Esportivo"
        description="Saiba mais sobre o tiro de precisão."
        to="/tiro-esportivo"
      />
      <Card
        icon={<FaSwimmer />}
        title="Triathlon"
        description="Descubra tudo sobre natação, ciclismo e corrida."
        to="/triathlon"
      />
    </div>
    </div>
  );
};

export default Home;
