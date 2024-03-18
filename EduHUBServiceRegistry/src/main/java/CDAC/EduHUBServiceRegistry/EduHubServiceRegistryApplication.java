package CDAC.EduHUBServiceRegistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EduHubServiceRegistryApplication {

	public static void main(String[] args) {
		SpringApplication.run(EduHubServiceRegistryApplication.class, args);
	}

}
