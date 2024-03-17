package cdac.eduhubNotification.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;



import cdac.eduhubNotification.model.Notification;
import cdac.eduhubNotification.repository.NotificationRepo;

@Service
public class NotificationService {

	@Autowired
	private NotificationRepo notificationRepo;
	
	public void saveNotification(Notification notification) {
		this.notificationRepo.save(notification);
	}
	
}
