package com.movie.movie_ticket.dto;

import lombok.Data;
import java.util.List;

@Data
public class BookingRequest {
    private Long showId;
    private List<Long> seatIds;
    private String userName;
    private String phone;
}
