package CDAC.EduHUBClassSchedule.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "teacher")
@Data
@NoArgsConstructor
@ToString
public class Teacher {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "teacher_id")
	private int id;
	private String teacherName;
	private long phoneNo;
	private String email;
	
	
	public Teacher(String teacherName, long phoneNo, String email) {
		super();
		this.teacherName = teacherName;
		this.phoneNo = phoneNo;
		this.email = email;
	}
	
	
	

}
