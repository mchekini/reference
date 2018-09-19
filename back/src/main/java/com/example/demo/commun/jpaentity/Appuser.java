package com.example.demo.commun.jpaentity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author mahdchek.
 */


@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Appuser {

    @Id
    private String login;
    private String password;

}
