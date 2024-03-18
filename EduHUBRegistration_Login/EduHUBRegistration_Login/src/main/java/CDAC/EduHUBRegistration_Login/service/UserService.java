package CDAC.EduHUBRegistration_Login.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import CDAC.EduHUBRegistration_Login.entites.User;

public interface UserService {
      
	  User addUserRegistration(User user); 
	  User getUserById(Integer userId);
	  List<User> getAllUser();
	  void deleteUser(Integer userId);
	  User updateUser(User user,Integer uId);
	  
	  User findUserByEmail(String email);
	  
	  
	 // String getPassword();
	  String updatePassword(String password,String email);
	  
	//  User findByRole(String role);
	ResponseEntity<List<User>> getUserByRole(String role);
}
