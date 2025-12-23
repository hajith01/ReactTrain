package com.movie.movie_ticket.config;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.movie.movie_ticket.model.Movie;
import com.movie.movie_ticket.model.Seat;
import com.movie.movie_ticket.model.Show;
import com.movie.movie_ticket.repositories.MovieRepository;
import com.movie.movie_ticket.repositories.SeatRepository;
import com.movie.movie_ticket.repositories.ShowRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.stream.IntStream;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final MovieRepository movieRepo;
    private final ShowRepository showRepo;
    private final SeatRepository seatRepo;

    @Override
    public void run(String... args) {

        if (movieRepo.count() > 0) return;

        Movie[] movies = {
            new Movie(null, "Avengers: Endgame", "Superhero movie",
                    "https://images.thedirect.com/media/article_full/endgame-poster.jpg"),
            new Movie(null, "Inception", "Sci-fi thriller",
                    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH"),
            new Movie(null, "Interstellar", "Space exploration",
                    "https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg"),
            new Movie(null, "The Dark Knight", "Batman crime thriller",
                    "https://tse1.mm.bing.net/th/id/OIP.lCYQZpdqe5UK_DBQgWGfkQHaJ4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"),
            new Movie(null, "Avatar", "Epic sci-fi fantasy",
                    "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg"),
            new Movie(null, "Titanic", "Romantic drama",
                    "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg"),
            new Movie(null, "Joker", "Psychological thriller",
                    "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"),
            new Movie(null, "Gladiator", "Historical epic",
                    "https://tse4.mm.bing.net/th/id/OIP.wtugDTdBP7CRarYcmItS1wHaIj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"),
            new Movie(null, "The Matrix", "Sci-fi action",
                    "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg"),
            new Movie(null, "Fight Club", "Psychological drama",
                    "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg"),
            new Movie(null, "Forrest Gump", "Drama",
                    "https://tse4.mm.bing.net/th/id/OIP.B1GfnOoTppaZgPdTPzh0pwHaLG?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3")
        };

        for (Movie movie : movies) {
    Movie savedMovie = movieRepo.save(movie);

   
    LocalDate day1 = LocalDate.now().plusDays(1); 
    LocalDate day2 = LocalDate.now().plusDays(2); 

    LocalTime showTime1 = LocalTime.of(15, 0); 
    LocalTime showTime2 = LocalTime.of(19, 0); 

    Show d1s1 = showRepo.save(
            new Show(null, savedMovie, LocalDateTime.of(day1, showTime1))
    );
    Show d1s2 = showRepo.save(
            new Show(null, savedMovie, LocalDateTime.of(day1, showTime2))
    );

    Show d2s1 = showRepo.save(
            new Show(null, savedMovie, LocalDateTime.of(day2, showTime1))
    );
    Show d2s2 = showRepo.save(
            new Show(null, savedMovie, LocalDateTime.of(day2, showTime2))
    );

    generateSeatsForShow(d1s1);
    generateSeatsForShow(d1s2);
    generateSeatsForShow(d2s1);
    generateSeatsForShow(d2s2);
        }



        System.out.println("Seeded 11 movies, 22 shows & seats successfully!");
    }

    private void generateSeatsForShow(Show show) {
        IntStream.rangeClosed(1, 20).forEach(num -> {
            Seat seat = new Seat();
            seat.setShow(show);
            seat.setSeatNumber(num);
            seatRepo.save(seat);
        });
    }
}
