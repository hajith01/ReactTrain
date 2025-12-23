import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/movies").then(res => setMovies(res.data));
  }, []);

  if (movies.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Currently No Movies Scheduled...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 6000,            
          disableOnInteraction: false
        }}
        navigation
        loop
        slidesPerView={1}
        observer
        observeParents
        className="w-full h-screen"
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => navigate(`/movies/${movie.id}/shows`)}
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="absolute bottom-20 left-10 max-w-xl">
                <h1 className="text-white text-5xl font-extrabold drop-shadow-lg">
                  {movie.title}
                </h1>
                <p className="text-gray-200 mt-4 text-lg line-clamp-3">
                  {movie.description}
                </p>

                <button
                  className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/movies/${movie.id}/shows`);
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
