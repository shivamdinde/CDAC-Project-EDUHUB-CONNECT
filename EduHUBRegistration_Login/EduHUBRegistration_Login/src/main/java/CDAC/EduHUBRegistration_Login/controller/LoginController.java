package CDAC.EduHUBRegistration_Login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import CDAC.EduHUBRegistration_Login.entites.Login;
import CDAC.EduHUBRegistration_Login.entites.LoginResponse;
import CDAC.EduHUBRegistration_Login.entites.User;
import CDAC.EduHUBRegistration_Login.service.UserService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpSession;

@RestController
//@RequestMapping("/user")
public class LoginController {
	
	 
	// private RestTemplate restTemplate;
	
	@Autowired
	private UserService userservice;
	
//	@PostMapping("login")
//	public ResponseEntity<String> userlogin(@RequestBody Login login, HttpSession session){
//		
//			String email = login.getEmail();
//			User u = userservice.findUserByEmail(email);
//			if(u != null) {
//				String pass = login.getPassword();
//				if(u.getPassword().equals(pass)) {
//					
//					User newUser =  userservice.findUserByEmail(email);
//					
//					return new ResponseEntity<>(newUser.getRole(), HttpStatus.OK);
//				}
//				return new ResponseEntity<String>("Incorrect Password !! ", HttpStatus.BAD_REQUEST);
//			}
//			return new ResponseEntity<String>("Sorry YOu have NOT Registered Yet !!! ", HttpStatus.BAD_REQUEST);
//		
//	}
//	
//	@GetMapping("/next-page")
//	public ResponseEntity<String> nextPage(HttpSession session) {
//	    String role = (String) session.getAttribute("role");
//	    if (role != null) {
//	        // Use the role for your logic
//	        return new ResponseEntity<>(role, HttpStatus.OK);
//	    }
//	    return new ResponseEntity<>("Role not found in session", HttpStatus.BAD_REQUEST);
//	}

	    @GetMapping("/admin/dashboard")
	    public ResponseEntity<String> adminDashboard() {
	        // Logic for admin dashboard
	        return ResponseEntity.ok("Admin Dashboard Data");
	    }

	    @GetMapping("/student/profile")
	    public ResponseEntity<String> studentProfile() {
	        // Logic for student profile
	        return ResponseEntity.ok("Student Profile Data");
	    }

//	    @PostMapping("/login")
//	    public ResponseEntity<?> loginSuccess(@RequestBody Login login, HttpSession session) {
//	        String email = login.getEmail();
//	        User u = userservice.findUserByEmail(email);
//	        if (u != null) {
//	            String pass = login.getPassword();
//	            if (u.getPassword().equals(pass)) {
//	                session.setAttribute("role", u.getRole());
//	                if (u.getRole().equals("ADMIN")) {
//	                    // Assuming "/admin/dashboard" is the correct URL for the admin dashboard
//	                    return ResponseEntity.ok().header(HttpHeaders.LOCATION, "/admin/dashboard").build();
//	                } else if (u.getRole().equals("STUDENT")) {
//	                    // Assuming "/student/profile" is the correct URL for the student profile
//	                    return ResponseEntity.ok().header(HttpHeaders.LOCATION, "/student/profile").build();
//	                } else {
//	                    // Handle other roles as needed
//	                    return ResponseEntity.ok().body("Role not supported");
//	                }
//	            }
//	        }
//	        // Return a 302 Found status with the location header set to the login page
//	        return ResponseEntity.status(HttpStatus.FOUND).header(HttpHeaders.LOCATION, "/login?error").build();
//	    }
	    
	    @PostMapping("user/login")
	    public ResponseEntity<?> loginSuccess(@RequestBody Login login, HttpSession session) {
	        String email = login.getEmail();
	        User u = userservice.findUserByEmail(email);
	        if (u != null) {
	            String pass = login.getPassword();
	            if (u.getPassword().equals(pass)) {
	                session.setAttribute("role", u.getRole());
	                LoginResponse response = new LoginResponse();
	                if (u.getRole().equals("ADMIN")) {
	                    response.setRedirectUrl("/admin/dashboard");
	                } else if (u.getRole().equals("STUDENT")) {
	                    response.setRedirectUrl("/student/profile");
	                }
	                response.setMessage("Login successful");
	                return ResponseEntity.ok().header(HttpHeaders.LOCATION, response.getRedirectUrl()).body(response);
	            }
	        }
	        return ResponseEntity.status(HttpStatus.FOUND).header(HttpHeaders.LOCATION, "/login?error").build();
	    }

}
