package com.letswatch.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MovieController {

    @GetMapping("/imdb-movies")
    public String listMovies(){
        return "movie-list-imdb";
    }

}
