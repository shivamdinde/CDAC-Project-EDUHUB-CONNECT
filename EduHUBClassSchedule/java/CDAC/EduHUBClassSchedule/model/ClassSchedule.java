package CDAC.EduHUBClassSchedule.model;


import java.util.Optional;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Table(name = "classschedule")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ClassSchedule {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "classschedule_id")
	private int id;
	
		
	@ManyToOne
	@JoinColumn(name = "teacher_id")
	private Teacher teacher;
	
	
	@ManyToOne
	@JoinColumn(name = "subject_id")
	private Subject subject;
	
	private String time;
    private String date;
}
