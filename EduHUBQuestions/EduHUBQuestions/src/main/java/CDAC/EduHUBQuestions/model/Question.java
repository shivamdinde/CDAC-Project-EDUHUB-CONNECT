package CDAC.EduHUBQuestions.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "question")
@NoArgsConstructor
public class Question {

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
	
//	@ManyToOne
//	@JoinColumn(name = "subject_id")
//	private Category category;
//	
//	@Enumerated(EnumType.STRING)
//	private DifficultyLevel difficultylevel;
	
	
	private String category;
	private String difficulty;
	private String option1;
    private String option2;
    private String option3;	
    private String option4;
    private String question_title;
    private String right_answer;
    
	
  
    

	
}
