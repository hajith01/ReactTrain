package com.movie.movie_ticket.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.movie.movie_ticket.model.Seat;
import com.movie.movie_ticket.service.SeatService;

import java.util.List;

@RestController
@RequestMapping("/seats")
@RequiredArgsConstructor
public class SeatController {

    private final SeatService seatService;

    @PostMapping("/generate/{showId}")
    public String generateSeats(@PathVariable Long showId) {
        seatService.generateSeats(showId);
        return "Seats created";
    }

    @GetMapping("/{showId}")
    public List<Seat> getSeats(@PathVariable Long showId) {
        return seatService.getSeats(showId);
    }
}
