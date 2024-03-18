package CDAC.EduHUBRegistration_Login.feign;

import java.beans.JavaBean;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


public interface AdminInterface {
 	@PostMapping("/assignRole")
    String assignRole(@RequestParam int i, @RequestParam String role);

}