package com.neo.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.AppointmentEntity;
import com.neo.security.request.AppointmentRequest;
import com.neo.security.service.AppointmentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("auth/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/book")
    public ResponseEntity<String> bookAppointment(@RequestBody AppointmentRequest appointmentRequest) {
        boolean isBooked = appointmentService.bookAppointment(appointmentRequest);
        if (isBooked) {
            return ResponseEntity.ok("Appointment booked successfully.");
        } else {
            return ResponseEntity.badRequest().body("Failed to book appointment.");
        }
    }
     
    @GetMapping("/all")
    public ResponseEntity<List<AppointmentEntity>> getAllAppointments() {
        List<AppointmentEntity> appointments = appointmentService.getAllAppointments();
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppointmentEntity> getAppointmentById(@PathVariable int id) {
        Optional<AppointmentEntity> appointment = appointmentService.getAppointmentById(id);
        return appointment.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
   
}
