import { Link } from "react-router-dom";
import { FaGithub, FaReact } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800">
      <Link to="/" className="text-2xl font-bold text-indigo-400">
        <FaReact className="inline mr-2" /> ValentinKt
      </Link>
      <div className="space-x-4 text-gray-300">
        <Link to="/">Home</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://github.com/ValentinKt" target="_blank" className="hover:text-white">
          <FaGithub className="inline text-xl" />
        </a>
      </div>
    </nav>
  );
}
