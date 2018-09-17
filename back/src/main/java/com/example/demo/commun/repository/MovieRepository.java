package com.example.demo.commun.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.commun.jpaentity.Movie;

/**
 * @Author mahdchek.
 */

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    
}
