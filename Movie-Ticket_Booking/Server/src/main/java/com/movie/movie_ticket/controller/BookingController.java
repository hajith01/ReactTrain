package com.movie.movie_ticket.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.movie.movie_ticket.dto.BookingRequest;
import com.movie.movie_ticket.model.Booking;
import com.movie.movie_ticket.service.BookingService;

@RestController
@RequestMapping("/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping
    public Booking bookSeats(@RequestBody BookingRequest request) {
        return bookingService.bookSeats(request);
    }
}