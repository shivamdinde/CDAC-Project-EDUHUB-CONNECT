package cdac.eduhubNotification.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cdac.eduhubNotification.model.Notification;

public interface NotificationRepo extends JpaRepository<Notification,Integer>{

}
