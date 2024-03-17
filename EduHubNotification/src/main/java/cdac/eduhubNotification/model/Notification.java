package cdac.eduhubNotification.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Notification { 
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
    
    private final String toPhoneNumber; 
    
    private final String fromPhoneNumber;
    
    private final String message; 
    
    private final LocalDateTime time;
}