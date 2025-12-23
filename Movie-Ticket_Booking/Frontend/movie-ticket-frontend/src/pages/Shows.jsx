
import { useEffect, useState } from "react";
import API from "../api/api";
import { useParams, useNavigate } from "react-router-dom";

export default function Shows() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [shows, setShows] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    API.get("/shows").then(res => {
      const filteredShows = res.data.filter(
        s => s.movie.id === parseInt(movieId)
      );
      setShows(filteredShows);

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setSelectedDate(tomorrow.toDateString());
    });
  }, [movieId]);

  const dates = [1, 2].map(offset => {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d;
  });

  const filteredShows = shows.filter(show => {
    const showDate = new Date(show.startTime).toDateString();
    return showDate === selectedDate;
  });

  const movie = shows[0]?.movie;

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: movie
          ? `url(${movie.posterUrl})`
          : "none"
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 px-8 py-6 max-w-6xl mx-auto text-white">

        {movie && (
          <div className="flex gap-6 mb-8">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-40 h-60 object-cover rounded-lg shadow-lg"
            />

            <div>
              <h1 className="text-4xl font-bold">
                {movie.title}
              </h1>
              <p className="text-gray-300 mt-3 max-w-xl">
                {movie.description}
              </p>
            </div>
          </div>
        )}

        <div className="flex gap-4 mb-8">
          {dates.map(date => {
            const dateStr = date.toDateString();
            const isActive = selectedDate === dateStr;

            return (
              <button
                key={dateStr}
                onClick={() => setSelectedDate(dateStr)}
                className={`px-5 py-3 rounded-lg border text-sm font-semibold transition
                  ${
                    isActive
                      ? "bg-white text-black border-white"
                      : "border-gray-400 hover:bg-white/10"
                  }`}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">
                    {date.getDate()}
                  </div>
                  <div className="text-xs uppercase">
                    {date.toLocaleDateString("en-IN", {
                      weekday: "short",
                      month: "short"
                    })}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            🎥 IMAX Cinema
          </h2>

          <div className="flex gap-4 flex-wrap">
            {filteredShows.map(show => (
              <button
                key={show.id}
                onClick={() =>
                  navigate(`/shows/${show.id}/seats`)
                }
                className="px-6 py-3 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition"
              >
                {new Date(show.startTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </button>
            ))}

            {filteredShows.length === 0 && (
              <p className="text-gray-300">
                No shows available for this date
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
