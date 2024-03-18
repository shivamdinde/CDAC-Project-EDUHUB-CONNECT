package com.EduHubAttendence.services.impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.EduHubAttendence.model.Attendence;
import com.EduHubAttendence.model.CourseDates;
import com.EduHubAttendence.model.User;
import com.EduHubAttendence.repo.AttendenceRepo;
import com.EduHubAttendence.repo.CourseDatesRepo;
import com.EduHubAttendence.repo.UserRepo;
import com.EduHubAttendence.services.AttendenceService;

//this is Implementation of This Service 
@Service
public class AttendenceServiceImpl implements AttendenceService{

	
	 private AttendenceRepo attendenceRepo;
	 
	 private UserRepo userRepo;
	 
	 private CourseDatesRepo courseDatesRepo;
	 
	//Dependency Injection (Constructor Injection) 
	public AttendenceServiceImpl(AttendenceRepo attendenceRepo, UserRepo userRepo, CourseDatesRepo courseRepo) {
		this.attendenceRepo = attendenceRepo;
		this.userRepo = userRepo;
		this.courseDatesRepo = courseRepo;
	}

	
	/*@Override
	public Attendence getByUserAttendenceById(Integer uId) {
		
		User aUser = this.userRepo.findById(uId).orElseThrow();
		
		
		
		Attendence attendence=this.attendenceRepo.findById(uId).orElseThrow(()->new RuntimeException("User Not Found") );
		return attendence;
	}*/
	
	
	@Override
	public Attendence getByUserAttendenceById(Integer uId) {
		
		//User aUser = this.userRepo.findById(uId).orElseThrow();
		
		
		
		Attendence attendence=this.attendenceRepo.findById(uId).orElseThrow(()->new RuntimeException("User Not Found") );
		
		User user = attendence.getUser();
		   
		
		
		return attendence;
	}
	
	@Override
	public List<Attendence> getAllAttendenceOfUserById(Integer uId){
		
		List<Attendence> listAttendenceByuserId = this.attendenceRepo.findAllByUserId(uId);
		
		return listAttendenceByuserId;
	}

	@Override
	public List<Attendence> findByDate(LocalDate date) {
		
		List<Attendence> attendences = this.attendenceRepo.findByDate(date);
		return attendences;
		
	}

	@Override
	public List<Attendence> findByDayType(String type) {
		
		List<Attendence> attendences = this.attendenceRepo.findByDayType(type);
		
		return attendences;
	}

	@Override
	public List<Attendence> findByCourse(String type){
		List<Attendence> attendences = this.attendenceRepo.findByCourse(type);
		return attendences;
	}


	@Override
	public Attendence addAttendanceForUser(int userId, int dateId, int status) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        CourseDates courseDate = courseDatesRepo.findById(dateId)
                .orElseThrow(() -> new IllegalArgumentException("Course date not found"));

        Attendence attendance = new Attendence();
        attendance.setUser(user);
        attendance.setCourseDate(courseDate);
        attendance.setStatus(status);

        return attendenceRepo.save(attendance);
    }

	@Override
	public List<Attendence> getAllAttendence() {
		
		return this.attendenceRepo.findAll();
	}
	
	@Override
	public User getUserById(Integer id) {
		return this.userRepo.findById(id).orElseThrow();
	}


	

}
