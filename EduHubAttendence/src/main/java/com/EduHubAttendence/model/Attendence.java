package com.EduHubAttendence.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Attendence {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int aId;

    @ManyToOne
    @JoinColumn(name = "uId", referencedColumnName = "uId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "dateId", referencedColumnName = "dateId")
    private CourseDates courseDate;
    
  /*  @ManyToOne
    @JoinColumn(name = "subId", referencedColumnName = "subId")
    private Subject subject;*/
   
    private int status;
    
}