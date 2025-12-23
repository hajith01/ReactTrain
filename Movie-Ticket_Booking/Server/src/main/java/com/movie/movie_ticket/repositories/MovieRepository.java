package com.movie.movie_ticket.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.movie_ticket.model.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {}