import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="min-h-[60px] bg-black text-white px-6 py-5 flex justify-between items-center border-b-4 border-white/80">
      
      <h1 className="text-2xl font-bold">MakeMyShow</h1>

      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-gray-300 transition">
          Home
        </Link>
        <Link to="/movies" className="hover:text-gray-300 transition">
          Movies
        </Link>
      </div>

    </nav>
  );
}
