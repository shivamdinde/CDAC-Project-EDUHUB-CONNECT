package cdac.eduhubNotification;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.twilio.Twilio;

@SpringBootApplication
public class EduHubNotificationApplication {

	public static void main(String[] args) {
		SpringApplication.run(EduHubNotificationApplication.class, args);
	}

    private final static String ACCOUNT_SID = ""; 
    private final static String AUTH_ID = ""; 
       
      
    static { 
        Twilio.init(ACCOUNT_SID, AUTH_ID); 
    } 
        
    
   
	

}
