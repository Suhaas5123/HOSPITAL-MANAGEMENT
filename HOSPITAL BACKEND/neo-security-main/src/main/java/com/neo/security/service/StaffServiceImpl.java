package com.neo.security.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.neo.security.entity.StaffEntity;
import com.neo.security.repository.StaffRepository;
@Service
public class StaffServiceImpl{
	
	@Autowired
	private StaffRepository repo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public Boolean addUser(StaffEntity staffEntity) {
		
		String encodedPassword = passwordEncoder.encode(staffEntity.getPassword());
		
		StaffEntity user1 = StaffEntity.builder()
				
				.name(staffEntity.getUsername())
				.password(encodedPassword)
				.email(staffEntity.getEmail())
				.staffType(staffEntity.getStaffType())
				.emergencyNumber(staffEntity.getEmergencyNumber())
				.age(staffEntity.getAge())
				.gender(staffEntity.getGender())
				.address(staffEntity.getAddress())
				.build();
		
		 return repo.save(user1)!=null ? true:false;
	}
	
	public List<StaffEntity> getAllUsers() {
		return repo.findAll();
	}
	
	public StaffEntity getUserByEmail(String email) {
	
		return repo.findByEmail(email).get();
	}
	public StaffEntity createStaff(StaffEntity staff) {
	    return repo.save(staff);
	}

	// Get all staff
	public List<StaffEntity> getAllStaff() {
	    return repo.findAll();
	}

    // Get staff by ID
    public Optional<StaffEntity> getStaffById(int id) {
        return repo.findById(id);
    }

	
	

}