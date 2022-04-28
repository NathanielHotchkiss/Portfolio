import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center h-16 mx-auto">
      <Link
        to="/"
        className="text-md md:text-lg font-medium tracking-wide text-gray-900 dark:text-neutral-200 hover:text-rose-600 hover:scale-110 py-2"
      >
        home
      </Link>
      <Link
        to="/projects"
        className="text-md md:text-lg font-medium tracking-wide text-gray-900 dark:text-neutral-200 hover:text-rose-600 hover:scale-110 py-2 mx-8"
      >
        projects
      </Link>
      <Link
        to="/resume"
        className="text-md md:text-lg font-medium tracking-wide text-gray-900 dark:text-neutral-200 hover:text-rose-600 hover:scale-110 py-2"
      >
        resume
      </Link>
    </nav>
  );
}
