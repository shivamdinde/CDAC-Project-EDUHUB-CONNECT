package CDAC.EduHUBRegistration_Login.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import CDAC.EduHUBRegistration_Login.entites.User;
import CDAC.EduHUBRegistration_Login.repository.UserRepository;

@Configuration
public class CustomeUserDetailsService implements UserDetailsService {

	
	 @Autowired
	    private UserRepository ourUserRepo;
	
	 @Override
	 public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	        User userOptional = ourUserRepo.findByEmail(username);

	        if (userOptional!=null) {
	          //  User user = userOptional.get();
	            return new UserInfo(userOptional);
	        } else {
	            throw new UsernameNotFoundException("User with email " + username + " not found");
	        }
	    }

	
	
}
