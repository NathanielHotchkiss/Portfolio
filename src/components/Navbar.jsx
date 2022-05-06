import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center h-14">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-base font-extrabold tracking-wide text-zinc-700 dark:text-zinc-400"
            : "text-base font-medium tracking-wide text-zinc-900 dark:text-zinc-200"
        }
      >
        home
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive
            ? "text-base font-extrabold tracking-wide text-zinc-700 dark:text-zinc-400 mx-6 sm:mx-12"
            : "text-base font-medium tracking-wide text-zinc-900 dark:text-zinc-200 mx-6 sm:mx-12"
        } >
        projects
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
        isActive
          ? "text-base font-extrabold tracking-wide text-zinc-700 dark:text-zinc-400"
          : "text-base font-medium tracking-wide text-zinc-900 dark:text-zinc-200"
      } >
        resume
      </NavLink>
    </nav>
  );
}
