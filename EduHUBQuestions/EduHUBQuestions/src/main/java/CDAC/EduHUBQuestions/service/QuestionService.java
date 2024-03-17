package CDAC.EduHUBQuestions.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import CDAC.EduHUBQuestions.model.Category;
import CDAC.EduHUBQuestions.model.DifficultyLevel;
import CDAC.EduHUBQuestions.model.Question;
import CDAC.EduHUBQuestions.model.QuestionWrapper;
import CDAC.EduHUBQuestions.model.Response;
import CDAC.EduHUBQuestions.repository.CategoryRepository;
import CDAC.EduHUBQuestions.repository.QuestionRepository;

@Service
public class QuestionService {
	
	@Autowired
	private QuestionRepository questionRepository;
//	private CategoryRepository categoryRepository;
	

	

    public QuestionService(QuestionRepository questionRepository) {
		super();
		this.questionRepository = questionRepository;
	}
	
	public ResponseEntity<List<Question>> getAllQuestions() {
        try {
            return new ResponseEntity<>(questionRepository.findAll(), HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }


	public ResponseEntity<List<Question>> getQuestionsByCategory(String category) {
        try {
            return new ResponseEntity<>(questionRepository.findByCategory(category),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);

    }

    public ResponseEntity<String> addQuestion(Question question) {
    	questionRepository.save(question);
        return new ResponseEntity<>("success",HttpStatus.CREATED);
    }

    public ResponseEntity<List<Integer>> getQuestionsForQuiz(String categoryName, Integer numQuestions) {
        List<Integer> questions = questionRepository.findRandomQuestionByCategory(categoryName, numQuestions);
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }

    public ResponseEntity<List<QuestionWrapper>> getQuestionsFromId(List<Integer> questionIds) {
        List<QuestionWrapper> wrappers = new ArrayList<>();
        List<Question> questions = new ArrayList<>();

        for(Integer id : questionIds){
            questions.add(questionRepository.findById(id).get());
        }

        for(Question question : questions){
            QuestionWrapper wrapper = new QuestionWrapper();
            wrapper.setId(question.getId());
            wrapper.setQuestionTitle(question.getQuestion_title());
            wrapper.setOption1(question.getOption1());
            wrapper.setOption2(question.getOption2());
            wrapper.setOption3(question.getOption3());
            wrapper.setOption4(question.getOption4());
            wrappers.add(wrapper);
        }

        return new ResponseEntity<>(wrappers, HttpStatus.OK);
    }

    public ResponseEntity<Integer> getScore(List<Response> responses) {


        int right = 0;

        for(Response response : responses){
            Question question = questionRepository.findById(response.getId()).get();
            if(response.getResponse().equals(question.getRight_answer()))
                right++;
        }
        return new ResponseEntity<>(right, HttpStatus.OK);
    }
	
//	public void addCategory(Category category){
//		//String successMessage = "Added Category";
//		categoryRepository.save(category);
//		// return  new ResponseEntity<String>(successMessage, HttpStatus.OK);
//	}
//	
//	public List<Category> findAllCategory(){
//		
//		List<Category> listCat = categoryRepository.findAll();
//		
//		return listCat;
//	}
//	
//	public Optional<Category> getByCatId(Integer id) {
//		return categoryRepository.findById(id);
//	}
//	



	
}
