package com.movie.movie_ticket.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.movie.movie_ticket.model.Seat;
import com.movie.movie_ticket.model.Show;
import com.movie.movie_ticket.repositories.SeatRepository;
import com.movie.movie_ticket.repositories.ShowRepository;

import java.util.List;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
public class SeatService {

    private final SeatRepository seatRepo;
    private final ShowRepository showRepo;

    public void generateSeats(Long showId) {
        Show show = showRepo.findById(showId)
                .orElseThrow(() -> new RuntimeException("Show not found"));

        IntStream.rangeClosed(1, 20).forEach(num -> {
            Seat seat = new Seat();
            seat.setShow(show);
            seat.setSeatNumber(num);
            seatRepo.save(seat);
        });
    }

    public List<Seat> getSeats(Long showId) {
        return seatRepo.findByShowId(showId);
    }
}
