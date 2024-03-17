package com.feedback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feedback.model.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Integer>{

}
