package com.movie.movie_ticket.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.movie.movie_ticket.model.Movie;
import com.movie.movie_ticket.repositories.MovieRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepository movieRepository;

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public Movie addMovie(Movie movie) {
        return movieRepository.save(movie);
    }
}
