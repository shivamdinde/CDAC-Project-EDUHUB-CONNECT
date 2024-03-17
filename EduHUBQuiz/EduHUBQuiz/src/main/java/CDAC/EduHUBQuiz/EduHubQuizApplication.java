package CDAC.EduHUBQuiz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class EduHubQuizApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(EduHubQuizApplication.class, args);
		
	}

}
