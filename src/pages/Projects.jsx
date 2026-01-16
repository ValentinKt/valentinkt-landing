import { FaPython, FaJs, FaMobileAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Projets</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {/* Tu peux ajouter plus ici en liant à tes repos GitHub */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">DataAnalyzer</h3>
          <p className="text-gray-300 mb-4">Tool Python d’analyse et tests automatisés.</p>
          <a href="https://github.com/ValentinKt/DataAnalyzer" className="text-indigo-400 hover:underline">
            Voir sur GitHub
          </a>
          <div className="mt-4 space-x-2">
            <FaPython className="inline text-xl text-yellow-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
