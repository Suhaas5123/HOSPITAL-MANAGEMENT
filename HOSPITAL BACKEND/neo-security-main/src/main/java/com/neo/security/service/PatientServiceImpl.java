package com.neo.security.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.neo.security.entity.PatientEntity;
import com.neo.security.repository.PatientRepository;
@Service
public class PatientServiceImpl{
	
	@Autowired
	private PatientRepository repo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public Boolean addUser(PatientEntity patientEntity) {
		
		String encodedPassword = passwordEncoder.encode(patientEntity.getPassword());
		
		PatientEntity user1 = PatientEntity.builder()
				
				.name(patientEntity.getUsername())
				.email(patientEntity.getEmail())
				.emergencyNumber(patientEntity.getEmergencyNumber())
				.age(patientEntity.getAge())
				.gender(patientEntity.getGender())
				.bloodgroup(patientEntity.getBloodGroup())
				.address(patientEntity.getAddress())
				.password(encodedPassword)
				.build();
		

		return repo.save(user1)!=null?true:false;
	}
	
	public List<PatientEntity> getAllPatients() {
		return repo.findAll();
	}
	
	public PatientEntity getPatientByEmail(String email) {
		return repo.findByEmail(email).get();
	}
	public PatientEntity createPatient(PatientEntity patient) {
	    return repo.save(patient);
	}

	// Get all staff
	public List<PatientEntity> getAllPatient() {
	    return repo.findAll();
	}

    // Get staff by ID
    public Optional<PatientEntity> getPatientById(int id) {
        return repo.findById(id);
    }

	
	

}