package com.feedback.service;

import java.util.List;

import com.feedback.model.Feedback;

public interface FeedbackService {

	Feedback getOneFeedbackById(Integer feedbackId);
	
	List<Feedback> getListofAllFeedback();
	
	//Feedback updateFeedback(Feedback feedback, Integer feedbackId);
	
	void deleteFeedback(Integer feedbackId);
	
	Feedback createFeedback(Feedback feedback);
}
