package com.movie.movie_ticket.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.movie_ticket.model.Show;

public interface ShowRepository extends JpaRepository<Show, Long> {}
