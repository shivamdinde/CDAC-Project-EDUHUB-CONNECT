package CDAC.EduHUBQuestions.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Subjects")
@Data
@NoArgsConstructor
public class Category {
	
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		@Column(name = "subject_id")
		private int id;
		private String subjectName;
		
		public Category(String subjectName) {
			super();
			this.subjectName = subjectName;
		}

		
}
