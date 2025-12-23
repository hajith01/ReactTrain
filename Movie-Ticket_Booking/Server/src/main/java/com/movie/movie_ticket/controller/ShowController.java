package com.movie.movie_ticket.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.movie.movie_ticket.model.Show;
import com.movie.movie_ticket.service.ShowService;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/shows")
@RequiredArgsConstructor
public class ShowController {

    private final ShowService showService;

    @GetMapping("/{id}")
public Show getShow(@PathVariable Long id) {
    return showService.getShowById(id);
}

    @PostMapping("/{movieId}")
    public Show addShow(@PathVariable Long movieId) {
        return showService.addShow(movieId, LocalDateTime.now().plusDays(1));
    }

    @GetMapping
    public List<Show> getShows() {
        return showService.getShows();
    }
}
