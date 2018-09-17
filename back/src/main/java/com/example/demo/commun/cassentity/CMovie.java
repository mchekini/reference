package com.example.demo.commun.cassentity;

import java.io.Serializable;
import java.util.UUID;

import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author mahdchek.
 */
@Table("movie")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CMovie implements Serializable {

    @PrimaryKey
    private String link;
    private UUID   id;
    private String author;
}



