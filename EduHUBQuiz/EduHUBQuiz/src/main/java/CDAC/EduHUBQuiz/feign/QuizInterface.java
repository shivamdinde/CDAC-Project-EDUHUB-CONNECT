package CDAC.EduHUBQuiz.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import CDAC.EduHUBQuiz.model.QuestionWrapper;
import CDAC.EduHUBQuiz.model.Response;

@FeignClient("EduHUBQuestions")
public interface QuizInterface {

	 	@GetMapping("question/generate")
	    public ResponseEntity<List<Integer>> getQuestionsForQuiz
	            (@RequestParam("categoryName") String categoryName, @RequestParam("numQuestions") Integer numQuestions );

	    @PostMapping("question/getQuestions")
	    public ResponseEntity<List<QuestionWrapper>> getQuestionsFromId(@RequestBody List<Integer> questionIds);

	    @PostMapping("question/getScore")
	    public ResponseEntity<Integer> getScore(@RequestBody List<Response> responses);
	
	
}
