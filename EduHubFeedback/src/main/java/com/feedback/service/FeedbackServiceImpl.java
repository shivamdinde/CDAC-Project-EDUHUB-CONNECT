package com.feedback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.feedback.model.Feedback;
import com.feedback.repository.FeedbackRepo;

@Service
public class FeedbackServiceImpl implements FeedbackService{

	@Autowired
	private FeedbackRepo feedbackRepo;
	
	
	@Override
	public Feedback getOneFeedbackById(Integer feedbackId) {
		
		//Feedback feedback = this.feedbackRepo.findById(feedbackId).orElseThrow();
		
		return this.feedbackRepo.findById(feedbackId).orElseThrow();
	}

	@Override
	public List<Feedback> getListofAllFeedback() {

		return this.feedbackRepo.findAll();
	}

	

	@Override
	public void deleteFeedback(Integer feedbackId) {
		this.feedbackRepo.deleteById(feedbackId);
		
	}

	@Override
	public Feedback createFeedback(Feedback feedback) {
		
		Feedback createdFeedBack =  this.feedbackRepo.save(feedback);
		
     return createdFeedBack;
	}

}
