package com.EduHubAttendence.services;

import java.time.LocalDate;
import java.util.List;

import com.EduHubAttendence.model.Attendence;
import com.EduHubAttendence.model.User;


//creating Service contract for Services 
public interface AttendenceService {

      
	 Attendence getByUserAttendenceById(Integer uId);
	
	 List<Attendence> getAllAttendenceOfUserById(Integer uId);
	
	 //this is Custom Methods For fetching data by findByDate
	 List<Attendence> findByDate(LocalDate date);
	
	//this is Custom Methods For fetching data by findByDayTyp
	 List<Attendence> findByDayType(String type);
	 
	//this is Custom Methods For fetching data by findByCourse
	 List<Attendence> findByCourse(String type);
	 
	 Attendence addAttendanceForUser(int userId, int dateId, int status);
	 
	 
	 List<Attendence> getAllAttendence();
	 
	 User getUserById(Integer id);
	 
}
