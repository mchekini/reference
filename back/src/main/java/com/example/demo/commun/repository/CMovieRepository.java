package com.example.demo.commun.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.commun.cassentity.CMovie;

/**
 * @Author mahdchek.
 */
public interface CMovieRepository extends CrudRepository<CMovie, String> {
}
