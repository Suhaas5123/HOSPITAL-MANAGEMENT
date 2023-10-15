package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Feed;

public interface FeedRepository extends JpaRepository<Feed, Long>{

}
