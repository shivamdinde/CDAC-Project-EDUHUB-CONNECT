package cdac.eduhubNotification;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.twilio.Twilio;

@SpringBootApplication
public class EduHubNotificationApplication {

	public static void main(String[] args) {
		SpringApplication.run(EduHubNotificationApplication.class, args);
	}

    private final static String ACCOUNT_SID = "ACcd67df4ba276a0b2c0db62904eff6a16"; 
    private final static String AUTH_ID = "d7bb92b83e32465ca6655c7e1710d508"; 
       
      
    static { 
        Twilio.init(ACCOUNT_SID, AUTH_ID); 
    } 
        
    
   
	

}
