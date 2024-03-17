package CDAC.EduHUBQuiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import CDAC.EduHUBQuiz.model.Quiz;

public interface QuizRepo extends JpaRepository<Quiz, Integer>{

}
