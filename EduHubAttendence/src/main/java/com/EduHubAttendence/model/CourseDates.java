package com.EduHubAttendence.model;

import java.time.LocalDate;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;






@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseDates {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int dateId;
	
	private LocalDate dDate;
	
	private String dateType;
	
	private String dateremark;
	
	/* @OneToMany(mappedBy = "courseDate")
	 private Set<Attendence> attendences;*/
	
}
