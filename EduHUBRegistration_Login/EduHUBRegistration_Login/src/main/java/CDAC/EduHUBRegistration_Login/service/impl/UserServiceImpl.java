package CDAC.EduHUBRegistration_Login.service.impl;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import CDAC.EduHUBRegistration_Login.entites.User;
import CDAC.EduHUBRegistration_Login.repository.UserRepository;
import CDAC.EduHUBRegistration_Login.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	private UserRepository userepo;

	
	public UserServiceImpl(UserRepository userepo) {
	
		this.userepo = userepo;
	}

	@Override
	public User addUserRegistration(User user) {
		
		User createdUser= this.userepo.save(user);
		
		return createdUser;
	}

	@Override
	public User getUserById(Integer userId) {
		
		User user = this.userepo.findById(userId).orElseThrow();
		
		return user;
	}

	@Override
	public List<User> getAllUser() {
		
		List<User> users=this.userepo.findAll();
		
		return users;
	}

	@Override
	public void deleteUser(Integer userId) {
		
		this.userepo.deleteById(userId);
	}

	@Override
	public User updateUser(User user , Integer uId) {
		
		User dbuser = this.userepo.findById(user.getUserId()).orElseThrow();
		 dbuser.setUserName(user.getUserName());
		 dbuser.setFullName(user.getFullName());
		 dbuser.setEmail(user.getEmail());
		 dbuser.setPhoneNo(user.getPhoneNo());
		 dbuser.setCity(user.getCity());
		 dbuser.setPincode(user.getPincode());
		 dbuser.setState(user.getState());

		User updateduser =  this.userepo.save(dbuser);
		return updateduser;
	}

	/*@Override
	public String getPassword() {
		
		return null;
	}*/

	@Override
	public String updatePassword(String password,String email) {
		
		//User dbUser = this.userepo.findById(userId).orElseThrow();
		
		User dbsUser = this.userepo.findByEmail(email);
		 dbsUser.setPassword(password);
		 
		 User updatedUserWithPassword= this.userepo.save(dbsUser);
		 
		 
		return "Password Update Succesfully";
	}

	@Override
	public ResponseEntity<List<User>> getUserByRole(String role) {
			List<User> user = userepo.findByRole(role);
		return new ResponseEntity<List<User>>(user, HttpStatus.OK);
	}

	@Override
	public User findUserByEmail(String email) {
		User u = userepo.findByEmail(email);
		return u;
	}

//	@Override
//	public User findByRole(String role) {
//		
//		User u = this.userepo.findByRole(role);
//		
//		return u;
//	}

	
	
	
	
}
