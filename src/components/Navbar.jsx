import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-br from-custom-magenta to-custom-purple dark:from-custom-purple dark:to-custom-magenta">
      <nav className="flex items-center justify-center h-16 mx-auto shadow-md">
        <Link
          to="/projects"
          className="text-sm md:text-lg font-medium tracking-wide text-white hover:text-gray-200 hover:scale-105 py-2"
        >
          projects
        </Link>
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold tracking-wide text-white hover:text-gray-200 hover:scale-105 px-6 md:px-8 py-1"
        >
          nh
        </Link>
        <Link
          to="/resume"
          className="text-sm md:text-lg font-medium tracking-wide text-white hover:text-gray-200 hover:scale-105 py-2"
        >
          resume
        </Link>
      </nav>
    </div>
  );
}
