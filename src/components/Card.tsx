import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  to: string;
}

const Card = ({ icon, title, description, to }: CardProps) => {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 transition-colors hover:bg-indigo-50 dark:hover:bg-gray-700"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl mb-4 text-indigo-500 dark:text-indigo-300"
        >
          {icon}
        </motion.div>
        <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </motion.div>
    </Link>
  );
};

export default Card;
