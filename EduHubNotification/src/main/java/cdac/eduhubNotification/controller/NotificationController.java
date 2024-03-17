package cdac.eduhubNotification.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import cdac.eduhubNotification.model.Notification;
import cdac.eduhubNotification.service.NotificationService;

@RestController
@RequestMapping("/api/sms")
public class NotificationController {

	     @Autowired
	     private NotificationService notificationService;
	
	
	    @PostMapping("/send") 
	    public ResponseEntity<String> sendMessage(@RequestBody Notification notification) { 
	  
	        
	        if (notification == null || notification.getFromPhoneNumber() == null
	                || notification.getToPhoneNumber() == null || notification.getMessage() == null) { 
	            return ResponseEntity.badRequest().body("Invalid request data"); 
	        } 
	        
	        String fromNumber = notification.getFromPhoneNumber(); 
	        String toNumber = notification.getToPhoneNumber(); 
	        String msg = notification.getMessage(); 
	        LocalDateTime time=LocalDateTime.now();
	        
	        Notification dbnotification = new Notification(fromNumber, toNumber, msg, time);
	        notificationService.saveNotification(dbnotification);
	         
	        Message.creator(new PhoneNumber(toNumber), new PhoneNumber(fromNumber), 
	                msg).create(); 
	           
	  
	        return ResponseEntity.ok("SMS sent Succesfully !"); 
	    } 
	
	
	
}
