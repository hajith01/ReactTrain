package com.movie.movie_ticket.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.movie_ticket.model.Seat;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long> {
    List<Seat> findByShowId(Long showId);
}

