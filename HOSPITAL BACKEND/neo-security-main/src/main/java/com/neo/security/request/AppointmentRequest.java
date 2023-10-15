package com.neo.security.request;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AppointmentRequest {

    private String patientName;

    private int age;

    private String gender;

    private String mobile;

    private String email;

    private String disease;

    private String address;

    private String department;

    private LocalDate date;

    private LocalTime time;

    // Getters and setters

    // Constructors

    // Other fields and methods as needed
}
