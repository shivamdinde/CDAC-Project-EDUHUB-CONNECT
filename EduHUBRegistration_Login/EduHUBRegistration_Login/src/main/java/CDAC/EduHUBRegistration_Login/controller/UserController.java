package CDAC.EduHUBRegistration_Login.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import CDAC.EduHUBRegistration_Login.entites.User;
import CDAC.EduHUBRegistration_Login.feign.AdminInterface;
import CDAC.EduHUBRegistration_Login.service.UserService;



@RestController
//@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })
//@CrossOrigin(origins = "http://localhost:3004")
//@RequestMapping("/register")
public class UserController {

	@Autowired
	private UserService userservice;
	
	@Autowired
	private PasswordEncoder encoder;
//	@Autowired
//	private AdminInterface adminClient;
	

    @GetMapping("/user/hi")
    @CrossOrigin(origins = "http://localhost:3004")
    public String goH0me(){
        return "Thisn is publickly accesible withing needing authentication ";
    }
    
//    @PostMapping("user/save")
//    public ResponseEntity<Object> saveUSer(@RequestBody User ourUser){
//       
//        User result = this.userservice.addUserRegistration(ourUser);
//       
//        if (result.getUserId() > 0){
//            return ResponseEntity.ok("USer Was Saved");
//        }
//        return ResponseEntity.status(404).body("Error, USer Not Saved");
//    }
//    
    
//    @GetMapping("/student/me")
//    @PreAuthorize("hasAuthority('STUDENT')")
//    public ResponseEntity<User> findCurrentUser() {
//        Optional<User> userDetails = userRepository.findByEmail(getLoggedInUserDetails().getUsername());
//        User uemail = userDetails.get();
//        
//        String email = uemail.getEmail();
//        
//        Optional<User> userOptional = userRepository.findByEmail(email);
//        if (userOptional.isPresent()) {
//            return ResponseEntity.ok(userOptional.get());
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//        }
//    }	
//    
    @PostMapping("/user/save")
    @CrossOrigin(origins = "http://localhost:3004")
	private ResponseEntity<Object> registerUser(@RequestBody User user){
		
		user.setPassword(encoder.encode(user.getPassword()));
//		ResponseEntity<User> result = userService.addUser(user);
//		User fetchedUser = result.getBody();
		 User result = userservice.addUserRegistration(user);
//		if ("admin".equalsIgnoreCase(result.getRole())  && result.getUserId() > 0  ) {
//			adminClient.assignRole(user.getUserId(), "ADMIN");
//			return ResponseEntity.ok("User Has Saved Successfully >> ");
//        } else if ("student".equalsIgnoreCase(result.getRole())) {
//        	adminClient.assignRole(user.getUserId(), "STUDENT");
//        }else if ("teacher".equalsIgnoreCase(result.getRole())) {
//        	adminClient.assignRole(user.getUserId(), "TEACHER");
//        }else if ("staff".equalsIgnoreCase(result.getRole())) {
//        	adminClient.assignRole(user.getUserId(), "STAFF");
//        }
       
		return ResponseEntity.status(202).body("USer saved Successfully ");
		
	}
    
//    @PostMapping("create")
//    public ResponseEntity<String> createQuiz(@RequestBody QuizDto quizDto){
//        return adminClient.createQuiz(quizDto.getCategoryName(), quizDto.getNumQuestions(), quizDto.getTitle());
//    }

   

    @GetMapping("/admin/all")
    @CrossOrigin(origins = "http://localhost:3004")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userservice.getAllUser();
        return ResponseEntity.ok(users);
    }
//    @GetMapping("/students")
//    public ResponseEntity<User> getAllStudents() {
//        User students = userservice.findByRole("STUDENT");
//        return ResponseEntity.ok(students);
//    }
    
    @GetMapping("/role/{role}")
    @CrossOrigin(origins = "http://localhost:3004")
    public ResponseEntity<List<User>> getByRole(@PathVariable String role) {
        ResponseEntity<List<User>> students = userservice.getUserByRole(role);
        return ResponseEntity.ok(students.getBody());
    }
    
    
//    public UserDetails getLoggedInUserDetails(){
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        if(authentication != null && authentication.getPrincipal() instanceof UserDetails){
//            return (UserDetails) authentication.getPrincipal();
//        }
//        return null;
//    }
}


	

