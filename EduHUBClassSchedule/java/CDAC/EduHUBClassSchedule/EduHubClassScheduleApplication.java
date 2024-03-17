package CDAC.EduHUBClassSchedule;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class EduHubClassScheduleApplication {

	public static void main(String[] args) {
		SpringApplication.run(EduHubClassScheduleApplication.class, args);
	}

}
	