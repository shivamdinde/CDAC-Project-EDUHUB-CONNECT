package com.EduHubAttendence.repo;


import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.EduHubAttendence.model.Attendence;

public interface AttendenceRepo extends JpaRepository<Attendence,Integer>{

	@Query("SELECT a FROM Attendence a WHERE a.courseDate.dDate = :date")
    List<Attendence> findByDate(@Param("date") LocalDate date);

    @Query("SELECT a FROM Attendence a WHERE a.courseDate.dateType = :type")
    List<Attendence> findByDayType(@Param("type") String type);

    @Query("SELECT a FROM Attendence a WHERE a.courseDate IN (SELECT cd FROM CourseDates cd WHERE cd.dateType = :type)")
    List<Attendence> findByCourse(@Param("type") String type);
    
    /*@Query("SELECT a FROM Attendance a WHERE a.subject.subName = :subjectName")
    List<Attendence> findBySubjectName(@Param("subjectName") String subjectName);*/
    
    @Query("SELECT a FROM Attendence a WHERE a.user.uId = :userId")
    List<Attendence> findAllByUserId(@Param("userId") Integer userId);
    
    
    
}
