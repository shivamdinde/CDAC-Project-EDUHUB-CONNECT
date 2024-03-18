package com.EduHubAttendence.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EduHubAttendence.model.User;

public interface UserRepo extends JpaRepository<User, Integer>{

}
