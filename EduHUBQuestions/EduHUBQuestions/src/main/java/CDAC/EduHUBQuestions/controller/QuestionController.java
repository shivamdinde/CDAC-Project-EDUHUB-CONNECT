package CDAC.EduHUBQuestions.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import CDAC.EduHUBQuestions.model.Category;
import CDAC.EduHUBQuestions.model.DifficultyLevel;
import CDAC.EduHUBQuestions.model.Question;
import CDAC.EduHUBQuestions.model.QuestionWrapper;
import CDAC.EduHUBQuestions.model.Response;
import CDAC.EduHUBQuestions.service.QuestionService;
import jakarta.ws.rs.POST;
@RestController
//@Controller
@RequestMapping("question")
public class QuestionController {
	
	@Autowired
    QuestionService questionService;

    @Autowired
    Environment environment;

    @GetMapping("allQuestions")
    public ResponseEntity<List<Question>> getAllQuestions(){
        return questionService.getAllQuestions();
    }

    @GetMapping("category/{category}")
    public ResponseEntity<List<Question>> getQuestionsByCategory(@PathVariable String category){
        return questionService.getQuestionsByCategory(category);
    }

    @PostMapping("add")
    public ResponseEntity<String> addQuestion(@RequestBody Question question){
        return  questionService.addQuestion(question);
    }

   
    
    
    @GetMapping("generate")
    public ResponseEntity<List<Integer>> getQuestionsForQuiz
            (@RequestParam String categoryName, @RequestParam Integer numQuestions ){
        return questionService.getQuestionsForQuiz(categoryName, numQuestions);
    }

    @PostMapping("getQuestions")
    public ResponseEntity<List<QuestionWrapper>> getQuestionsFromId(@RequestBody List<Integer> questionIds){
        System.out.println(environment.getProperty("local.server.port"));
        return questionService.getQuestionsFromId(questionIds);
    }

    @PostMapping("getScore")
    public ResponseEntity<Integer> getScore(@RequestBody List<Response> responses)
    {
        return questionService.getScore(responses);
    }

    
    @PostMapping("addAllQues")
    public ResponseEntity<String> addAllQuestions(@RequestBody List<Question> quList){
    	
    	for(Question q : quList) {
    		questionService.addQuestion(q);
    	}
    	return new ResponseEntity<>("Questions added successfully",HttpStatus.OK);
    }
    
    
    
    /*@GetMapping("/addQuestions")
    public String home(Model model) {
    	
    	List<Category> category = questionService.findAllCategory();
   // 	List<DifficultyLevel> levels = questionService.findAllLevel();

		model.addAttribute("category", category);
		//model.addAttribute("difficultyLevel", levels);
		
    	return "addQuestions";
    }
    
    @GetMapping("/addCategory")
    public String home1(Model model) {
    	
    	//List<Category> category = questionService.findAllCategory();

		//model.addAttribute("category", category);
		
    	
    	return "addCategory";
    }
    
    @PostMapping("/addCategory")
    public String addCategory(@RequestParam("subjectName") String subjectName, RedirectAttributes redirectAttributes) {
    	
    	Category c = new Category();
    	c.setSubjectName(subjectName);
    	
    	questionService.addCategory(c);
    	
    	redirectAttributes.addFlashAttribute("successMessage","Successfully added");
    	
    	return "redirect:addCategory";
    }
    
    
    @PostMapping("/addQuestions")
    public String addQuestions(
    		
    		@RequestParam("category") int category,
    		@RequestParam("difficultyLevel") String difficultyLevel,
    		@RequestParam("questionTitle") String questionTitle,
    		@RequestParam("option1") String option1,
    		@RequestParam("option2") String option2,
    		@RequestParam("option3")String option3,
    		@RequestParam("option4")String option4,
    		@RequestParam("rightAnswer") String rightAnswer	
    		//@ModelAttribute Question q
    		, RedirectAttributes redirectAttributes){
        try {
        	Optional<Category> c = questionService.getByCatId(category);
        	
        	DifficultyLevel level = DifficultyLevel.valueOf(difficultyLevel.toUpperCase());
 
        	
        	Question questions = new Question();
        	questions.setCategory(c.get());
        	questions.setDifficultylevel(level);
        	questions.setQuestion_title(questionTitle);
        	questions.setOption1(option1);
        	questions.setOption2(option2);
        	questions.setOption3(option3);
        	questions.setOption4(option4);
        	questions.setRight_answer(rightAnswer);
        	
        	questionService.addQuestion(questions);
        	
        	redirectAttributes.addFlashAttribute("successMessage","Successfully added");
        	
        	
        }catch (Exception e) {
		
		}
		return "redirect:addQuestions";
    }*/
    
}
