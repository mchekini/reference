package com.example.demo.movie;

import java.util.List;
import javax.inject.Inject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.commun.cassentity.CMovie;
import com.example.demo.commun.jpaentity.Movie;
import com.example.demo.commun.repository.CMovieRepository;
import com.example.demo.commun.repository.MovieRepository;
import com.example.demo.commun.services.LogTimeMethod;

/**
 * @Author mahdchek.
 */


@RestController
public class MovieResource {

    private final MovieRepository movieRepository;
    private final CMovieRepository cassandraMovieRepository;

    @Inject
    public MovieResource(final MovieRepository movieRepository,
                         final CMovieRepository cassandraMovieRepository)
    {
        this.movieRepository = movieRepository;
        this.cassandraMovieRepository = cassandraMovieRepository;
    }

    @GetMapping("/init")
    @LogTimeMethod(treatmentName = "init")
    public String addMovies(){

        for (int i = 0; i< 100000; i++){
            final Movie movie = Movie.builder().id((long) i).link("http://link" + i).author("author " + i).build();
            movieRepository.save(movie);
        }
        return "creation successed";
    }

    @GetMapping("/init-c")
    @LogTimeMethod(treatmentName = "init-cassandra")
    public String addCMovies(){

        for (int i = 0; i< 100000; i++){
            final CMovie movie = CMovie.builder().link("http://link" + i).author("author " + i).build();
            cassandraMovieRepository.save(movie);
        }
        return "creation successed";
    }

    @GetMapping("search")
    @LogTimeMethod(treatmentName = "search")
    public String search(){
        List<Movie> movieList =  movieRepository.findAll();
        return "find done with success";
    }


    @GetMapping("search-c")
    @LogTimeMethod(treatmentName = "search-cassandra")
    public String Casssearch(){
        List<CMovie> movies = (List<CMovie>) cassandraMovieRepository.findAll();
        return "find cassandra done with success";
    }



}
