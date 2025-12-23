package com.movie.movie_ticket.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Show show;

    @ManyToMany
    private List<Seat> seats;

    private String userName;
    private String phone;

    private LocalDateTime bookingTime;
}
