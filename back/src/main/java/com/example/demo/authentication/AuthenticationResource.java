package com.example.demo.authentication;

import java.security.NoSuchAlgorithmException;
import javax.ws.rs.core.Response;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.commun.repository.UserRepository;
import com.example.demo.commun.utils.Security;

import static javax.ws.rs.core.Response.Status.OK;
import static javax.ws.rs.core.Response.Status.UNAUTHORIZED;

/**
 * @Author mahdchek.
 */

@RestController
public class AuthenticationResource {

    private final UserRepository userRepository;

    public AuthenticationResource(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/isuservalid/check")
    public Response isUserAuthenticated(final String login, final String password) throws NoSuchAlgorithmException {

        return Response.status(OK).build();

//        final String hashPassword = Security.hashMD5(password);
//
//        if (userRepository.findById(login).get().getPassword().equals(hashPassword)) {
//            return Response.status(OK).build();
//        }
//        return Response.status(UNAUTHORIZED).build();
    }
}
