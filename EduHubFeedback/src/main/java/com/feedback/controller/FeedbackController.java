package com.feedback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feedback.model.Feedback;
import com.feedback.service.FeedbackService;

@RestController
@RequestMapping("/api/feedbacks")
public class FeedbackController {

	@Autowired
    private FeedbackService feedbackService; 
	
	@GetMapping("/")
	public ResponseEntity<List<Feedback>> getAllfeeFeedback() {
		
		List<Feedback> listFeedback = this.feedbackService.getListofAllFeedback();
		
		return new ResponseEntity<List<Feedback>>(listFeedback,HttpStatus.OK);
		
	}
	
	@GetMapping("/{feedbackId}")
	public ResponseEntity<Feedback> getFeedbackById(@PathVariable int feedbackId) {
		
		Feedback feedback = this.feedbackService.getOneFeedbackById(feedbackId);
		return new ResponseEntity<Feedback>(feedback,HttpStatus.OK);
		
	}
	
	
	@PostMapping("/")
	public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback){

		Feedback createdfeedback = this.feedbackService.createFeedback(feedback);
		
		return new ResponseEntity<Feedback>(createdfeedback,HttpStatus.CREATED);
		
	}
	
	@DeleteMapping("/{feedbackId}")
	public void deleteFeedback(@PathVariable Integer feedbackId) {
		
		this.feedbackService.deleteFeedback(feedbackId);
	}
	
	
	
}
