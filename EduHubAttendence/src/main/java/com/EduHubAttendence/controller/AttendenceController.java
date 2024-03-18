package com.EduHubAttendence.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EduHubAttendence.model.Attendence;
import com.EduHubAttendence.model.User;
import com.EduHubAttendence.request.AttendenceRequest;
import com.EduHubAttendence.services.AttendenceService;

@RestController
@RequestMapping("/attendence")
@CrossOrigin(origins = "http://localhost:3000")
public class AttendenceController {

	
	private AttendenceService attendenceService ;
	
	//Dependency injection
	public AttendenceController(AttendenceService attendenceService) {
		this.attendenceService = attendenceService;
	}

	//Get AllAttendence 
	@GetMapping("/")
	public List<Attendence> getAllAttendence() { // working Fine 

		List<Attendence> listAttendences = this.attendenceService.getAllAttendence();
		return listAttendences;
	}
	
	//Specific user Attendence By Id 
	@GetMapping("/userattendence/{uId}") //working Fine 
	public Attendence getByUserAttendenceById(@PathVariable Integer uId) {
		Attendence attendenceByUserId = this.attendenceService.getByUserAttendenceById(uId);
		return attendenceByUserId;
	}
	
	
	@GetMapping("/{date}") //Working fine 
	public List<Attendence> findByDate(@PathVariable LocalDate date) { 
		
		List<Attendence> attendencesByDate = this.attendenceService.findByDate(date);
		return attendencesByDate;
	}
	
	
	@GetMapping("/Day/{type}") //Working Fine 
	public  List<Attendence> findByDayType(@PathVariable String type){
		
		List<Attendence> attendencesByType = this.attendenceService.findByDayType(type);
		
		return attendencesByType;
		
	}
	
	@GetMapping("/course/{type}") 
	public List<Attendence> findByCourse(@PathVariable String type){
		
		List<Attendence> attendenceByType = this.attendenceService.findByCourse(type);
		
		return attendenceByType;
	}
	
	@PostMapping("/addAttendence") //working fine 
	public Attendence addAttendanceForUser(@RequestBody AttendenceRequest request){

		return this.attendenceService.addAttendanceForUser(request.getuId(),request.getDateId(),request.getStatus());
	}
	
	@GetMapping("/user/{userId}") // working fine
	public User getUserById(@PathVariable Integer userId) {
		return this.attendenceService.getUserById(userId);
	}
	
	@GetMapping("/allattendence/user/{uId}")
	List<Attendence> getAllAttendenceOfUserById(@PathVariable Integer uId){
		
		return this.attendenceService.getAllAttendenceOfUserById(uId);
	}
	
	
}
