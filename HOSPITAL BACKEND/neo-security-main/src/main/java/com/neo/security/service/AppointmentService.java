package com.neo.security.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.AppointmentEntity;
import com.neo.security.repository.AppointmentRepository;
import com.neo.security.request.AppointmentRequest;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public boolean bookAppointment(AppointmentRequest appointmentRequest) {
        // Perform any validation checks here

        // Create the AppointmentEntity from the AppointmentRequest
        AppointmentEntity appointmentEntity = new AppointmentEntity();
        appointmentEntity.setPatientName(appointmentRequest.getPatientName());
        appointmentEntity.setAge(appointmentRequest.getAge());
        appointmentEntity.setGender(appointmentRequest.getGender());
        appointmentEntity.setMobile(appointmentRequest.getMobile());
        appointmentEntity.setEmail(appointmentRequest.getEmail());
        appointmentEntity.setDisease(appointmentRequest.getDisease());
        appointmentEntity.setAddress(appointmentRequest.getAddress());
        appointmentEntity.setDepartment(appointmentRequest.getDepartment());
        appointmentEntity.setDate(appointmentRequest.getDate());
        appointmentEntity.setTime(appointmentRequest.getTime());

        // Save the appointment in the database
        try {
            appointmentRepository.save(appointmentEntity);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    public List<AppointmentEntity> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Optional<AppointmentEntity> getAppointmentById(int id) {
        return appointmentRepository.findById(id);
    }
}
