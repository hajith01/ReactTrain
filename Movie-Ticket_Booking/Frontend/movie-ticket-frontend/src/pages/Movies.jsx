import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="px-8 pt-3 bg-black min-h-screen pb-4">
      <h1 className="text-4xl font-bold text-white mb-5 ">List Of Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {movies.map(movie => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movies/${movie.id}/shows`)}
            className="cursor-pointer bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={movie.posterUrl || "https://via.placeholder.com/300x400"}
              alt={movie.title}
              className="w-full h-[270px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                {movie.title}
              </h2>

              <p className="text-gray-600 text-sm line-clamp-3">
                {movie.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
