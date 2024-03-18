package CDAC.EduHUBRegistration_Login.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import CDAC.EduHUBRegistration_Login.entites.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	
	//@Query(value = "Select u from user u where u.email=:email?1", nativeQuery=true)
	User findByEmail(String email);
	
	
//	@Query(value = "select * from user where role=?1", nativeQuery = true)
//	User findByRole(String role);
	
	
	//@Query(value = "select * from user where role=?1", nativeQuery = true)
	List<User> findByRole(String role);
	
}
