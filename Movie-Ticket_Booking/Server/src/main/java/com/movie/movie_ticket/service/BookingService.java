package com.movie.movie_ticket.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.movie.movie_ticket.dto.BookingRequest;
import com.movie.movie_ticket.model.Booking;
import com.movie.movie_ticket.model.Seat;
import com.movie.movie_ticket.model.Show;
import com.movie.movie_ticket.repositories.BookingRepository;
import com.movie.movie_ticket.repositories.SeatRepository;
import com.movie.movie_ticket.repositories.ShowRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepo;
    private final SeatRepository seatRepo;
    private final ShowRepository showRepo;


    public Booking bookSeats(BookingRequest request) {

        boolean paymentSuccess = true;
        if (!paymentSuccess) {
            throw new RuntimeException("Payment failed");
        }


        Show show = showRepo.findById(request.getShowId())
                .orElseThrow(() -> new RuntimeException("Show not found"));

        List<Seat> seats = seatRepo.findAllById(request.getSeatIds());


        for (Seat seat : seats) {
            if (seat.getIsBooked()) {
                throw new RuntimeException("Seat already booked");
            }
        }

        for (Seat seat : seats) {
            seat.setIsBooked(true);
        }
        seatRepo.saveAll(seats);

        Booking booking = new Booking();
        booking.setShow(show);
        booking.setSeats(seats);
        booking.setUserName(request.getUserName());
        booking.setPhone(request.getPhone());
        booking.setBookingTime(LocalDateTime.now());

        Booking savedBooking = bookingRepo.save(booking);

        sendTicket(savedBooking);

        return savedBooking;
    }

    private void sendTicket(Booking booking) {
        System.out.println("TICKET CONFIRMED");
        System.out.println("Movie: " + booking.getShow().getMovie().getTitle());
        System.out.println("Time: " + booking.getShow().getStartTime());
        System.out.println("Seats: " +
                booking.getSeats().stream()
                        .map(s -> s.getSeatNumber().toString())
                        .toList());
        System.out.println("Customer: " + booking.getUserName());
        System.out.println("Phone: " + booking.getPhone());
    }
}
