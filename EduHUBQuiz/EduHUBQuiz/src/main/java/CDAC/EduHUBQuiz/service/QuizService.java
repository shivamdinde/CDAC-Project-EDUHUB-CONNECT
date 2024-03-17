package CDAC.EduHUBQuiz.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import CDAC.EduHUBQuiz.feign.QuizInterface;
import CDAC.EduHUBQuiz.model.QuestionWrapper;
import CDAC.EduHUBQuiz.model.Quiz;
import CDAC.EduHUBQuiz.model.Response;
import CDAC.EduHUBQuiz.repository.QuizRepo;

@Service
public class QuizService {

	@Autowired
	QuizRepo quizRepo;
	
	@Autowired
	QuizInterface quizInterface;
	
	
	public ResponseEntity<String> createQuiz(String category , int numQ , String title){
		
		List<Integer> questions = quizInterface.getQuestionsForQuiz(category, numQ).getBody();
		Quiz quiz = new Quiz();
		quiz.setTitle(title);
        quiz.setQuestionIds(questions);
        quizRepo.save(quiz);
        
        return new ResponseEntity<>("Success", HttpStatus.CREATED);
	}

    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
          Quiz quiz = quizRepo.findById(id).get();
          List<Integer> questionIds = quiz.getQuestionIds();
          ResponseEntity<List<QuestionWrapper>> questions = quizInterface.getQuestionsFromId(questionIds);
          return questions;

    }

    public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
        ResponseEntity<Integer> score = quizInterface.getScore(responses);
        return score;
    }
	
}
