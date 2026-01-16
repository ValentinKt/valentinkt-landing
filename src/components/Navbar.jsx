import { NavLink, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/projects", label: "Projets" },
      { to: "/about", label: "À propos" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  const linkClass = ({ isActive }) =>
    [
      "rounded-full px-3 py-2 text-sm transition",
      isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-400/20 ring-1 ring-white/10 shadow-glow">
            <FaReact className="text-emerald-200" />
          </span>
          <span className="tracking-tight">ValentinKt</span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {items.map((it) => (
            <NavLink key={it.to} to={it.to} className={linkClass} end={it.to === "/"}>
              {it.label}
            </NavLink>
          ))}
          <a
            href="https://github.com/ValentinKt"
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
          >
            <FaGithub className="text-base" />
            GitHub
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl bg-white/5 p-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white sm:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink-950/80 backdrop-blur sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                className={linkClass}
                end={it.to === "/"}
                onClick={() => setOpen(false)}
              >
                {it.label}
              </NavLink>
            ))}
            <a
              href="https://github.com/ValentinKt"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400/15 to-teal-400/15 px-4 py-3 text-sm font-medium text-white ring-1 ring-white/10"
            >
              <FaGithub />
              Ouvrir GitHub
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
