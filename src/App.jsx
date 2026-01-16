import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router
      basename={process.env.PUBLIC_URL}
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <div className="min-h-screen bg-ink-950 text-white selection:bg-emerald-300/30 selection:text-white">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_circle_at_100%_0%,rgba(20,184,166,0.14),transparent_60%),radial-gradient(900px_circle_at_50%_110%,rgba(56,189,248,0.08),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/5" />
        </div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="mt-20 border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>© {new Date().getFullYear()} ValentinKt</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/ValentinKt"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://ValentinKt.github.io/valentinkt-landing"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white"
              >
                Site
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
