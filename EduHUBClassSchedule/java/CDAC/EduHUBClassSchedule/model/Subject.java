package CDAC.EduHUBClassSchedule.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "subject")
@Data
@NoArgsConstructor
public class Subject {
	
	

	@Id
	@Column(name = "subject_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String subjectCode;
	private String subjectName;
	
	public Subject(String subjectCode, String subjectName) {
		super();
		this.subjectCode = subjectCode;
		this.subjectName = subjectName;
	}

}
