package com.neo.security.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.PatientEntity;
import com.neo.security.service.PatientServiceImpl;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/patient")
public class PatientController {

	@Autowired
	private PatientServiceImpl service;

	@PostMapping("/create")
    public ResponseEntity<PatientEntity> createStaff(@RequestBody PatientEntity patient) {
    	PatientEntity createdPatient = service.createPatient(patient);
        return new ResponseEntity<>(createdPatient, HttpStatus.CREATED);
    }

    // Get all staff
    @GetMapping("/all")
    public ResponseEntity<List<PatientEntity>> getAllStaff() {
        List<PatientEntity> PatientList = service.getAllPatient();
        return new ResponseEntity<>(PatientList, HttpStatus.OK);
    }

    // Get staff by ID
    @GetMapping("/{id}")
    public ResponseEntity<PatientEntity> getStaffById(@PathVariable int id) {
        Optional<PatientEntity> patient = service.getPatientById(id);
        return patient.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update staff details
//    @PutMapping("/update")
//    public ResponseEntity<StaffEntity> updateStaff(@RequestBody StaffEntity staff) {
//    	StaffEntity updatedStaff = service.updateStaff(staff);
//        return new ResponseEntity<>(updatedStaff, HttpStatus.OK);
//    }
//
//    // Delete staff by ID
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteStaffById(@PathVariable Long id) {
//        service.deleteStaffById(id);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//}
	
	
	
	
}