package com.neo.security.repository;

import java.lang.StackWalker.Option;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.StaffEntity;

public interface StaffRepository extends JpaRepository<StaffEntity, Integer>{

	Optional<StaffEntity> findByEmail(String email);
}
