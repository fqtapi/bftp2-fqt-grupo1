package com.example.bftp2springprofilesexample.repositories;

import com.example.bftp2springprofilesexample.models.Role;
import com.example.bftp2springprofilesexample.services.UserRegistrationService;
import org.apache.commons.lang3.RandomStringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class UserInitializer {

    private RoleRepository roleRepository;
    private UserRegistrationService userRegistrationService;

    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    public UserInitializer(RoleRepository roleRepository, UserRegistrationService userRegistrationService) {

        this.roleRepository = roleRepository;
        this.userRegistrationService = userRegistrationService;
    }

    @PostConstruct
    private void initialize() {
        addAvailableRoles();
        createAdminUser();
    }


    private void addAvailableRoles() {
        if (!roleRepository.findAll().isEmpty()) {
            return;
        }

        List<Role> roles = List.of(
                new Role(1, Role.RoleName.ROLE_ADMIN),
                new Role(2, Role.RoleName.ROLE_MODERATOR),
                new Role(3, Role.RoleName.ROLE_USER)
        );

        roleRepository.saveAll(roles);
    }

    private void createAdminUser() {

        if (userRegistrationService.anyUserExists()) {
            logger.info("A user already exists! Skipping creating admin user");
            return;
        }


        String password = generateCommonLangPassword();

        userRegistrationService.createNewUser(
                "admin",
                "admin@example.com",
                Set.of("admin"),
                password

        );

        logger.info("Generated Password for admin user: " + password);

    }

    private String generateCommonLangPassword() {
        String upperCaseLetters = RandomStringUtils.random(2, 65, 90, true, true);
        String lowerCaseLetters = RandomStringUtils.random(2, 97, 122, true, true);
        String numbers = RandomStringUtils.randomNumeric(2);
        String specialChar = RandomStringUtils.random(2, 33, 47, false, false);
        String totalChars = RandomStringUtils.randomAlphanumeric(2);
        String combinedChars = upperCaseLetters.concat(lowerCaseLetters)
                .concat(numbers)
                .concat(specialChar)
                .concat(totalChars);
        List<Character> pwdChars = combinedChars.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.toList());
        Collections.shuffle(pwdChars);
        String password = pwdChars.stream()
                .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append)
                .toString();
        return password;
    }
}
