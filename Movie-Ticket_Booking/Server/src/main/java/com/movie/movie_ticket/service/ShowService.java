package com.movie.movie_ticket.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.movie.movie_ticket.model.Movie;
import com.movie.movie_ticket.model.Show;
import com.movie.movie_ticket.repositories.MovieRepository;
import com.movie.movie_ticket.repositories.ShowRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ShowService {

    private final ShowRepository showRepo;
    private final MovieRepository movieRepo;

    public Show addShow(Long movieId, LocalDateTime startTime) {
        Movie movie = movieRepo.findById(movieId)
                .orElseThrow(() -> new RuntimeException("Movie not found"));

        Show show = new Show();
        show.setMovie(movie);
        show.setStartTime(startTime);

        return showRepo.save(show);
    }

    public List<Show> getShows() {
        return showRepo.findAll();
    }

    public Show getShowById(Long id) {
    return showRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Show not found"));
    }

}
