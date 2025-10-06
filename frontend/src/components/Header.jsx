import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">EdVantage</h1>
      <nav className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/placements">Placements</Link>
        <Link to="/events">Events</Link>
        <Link
          to="/elearning"
          className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500"
        >
          E-Learning
        </Link>
      </nav>
    </header>
  );
}
