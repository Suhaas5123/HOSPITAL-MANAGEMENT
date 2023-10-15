package com.neo.security.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.neo.security.entity.PatientEntity;
@Repository
public interface PatientRepository extends JpaRepository<PatientEntity, Integer>{

	Optional<PatientEntity> findByEmail(String email);
}
