package CDAC.EduHUBQuestions.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import CDAC.EduHUBQuestions.model.DifficultyLevel;
import CDAC.EduHUBQuestions.model.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer>{

	
	
	 List<Question> findByCategory(String category);
	 
	
	 @Query(value = "SELECT q.id FROM question q Where q.category=:category ORDER BY RAND() LIMIT :numQ", nativeQuery = true) 
	 List<Integer> findRandomQuestionByCategory(String category, int numQ);
	 
}
