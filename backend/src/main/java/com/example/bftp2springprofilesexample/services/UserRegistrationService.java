package com.example.bftp2springprofilesexample.services;

import com.example.bftp2springprofilesexample.configuration.JwtUtils;
import com.example.bftp2springprofilesexample.controllers.MessageResponse;
import com.example.bftp2springprofilesexample.controllers.SignupRequest;
import com.example.bftp2springprofilesexample.models.Role;
import com.example.bftp2springprofilesexample.models.User;
import com.example.bftp2springprofilesexample.repositories.RoleRepository;
import com.example.bftp2springprofilesexample.repositories.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.Set;

@Service
public class UserRegistrationService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final PasswordEncoder encoder;

    public UserRegistrationService(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.encoder = encoder;
    }

    public ResponseEntity<?> createNewUser(String username, String email, Set<String> strRoles, String password) {
        // Create new user's account
        User user = new User(username,
                email,
                encoder.encode(password));


        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(Role.RoleName.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(Role.RoleName.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                    case "mod"://
                        Role modRole = roleRepository.findByName(Role.RoleName.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);

                    default:
                        Role userRole = roleRepository.findByName(Role.RoleName.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);


                }

            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new

                MessageResponse("User registered successfully!"));
    }

    public boolean anyUserExists() {
        return !userRepository.findAll().isEmpty();
    }

}
