package com.movie.movie_ticket.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.movie_ticket.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
