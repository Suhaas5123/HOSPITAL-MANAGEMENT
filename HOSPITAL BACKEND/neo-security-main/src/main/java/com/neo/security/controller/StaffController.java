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

import com.neo.security.entity.StaffEntity;
import com.neo.security.service.StaffServiceImpl;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/staff")
public class StaffController {

	@Autowired
	private StaffServiceImpl service;

	@PostMapping("/create")
    public ResponseEntity<StaffEntity> createStaff(@RequestBody StaffEntity staff) {
    	StaffEntity createdStaff = service.createStaff(staff);
        return new ResponseEntity<>(createdStaff, HttpStatus.CREATED);
    }

    // Get all staff
    @GetMapping("/all")
    public ResponseEntity<List<StaffEntity>> getAllStaff() {
        List<StaffEntity> staffList = service.getAllStaff();
        return new ResponseEntity<>(staffList, HttpStatus.OK);
    }

    // Get staff by ID
    @GetMapping("/{id}")
    public ResponseEntity<StaffEntity> getStaffById(@PathVariable int id) {
        Optional<StaffEntity> staff = service.getStaffById(id);
        return staff.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
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