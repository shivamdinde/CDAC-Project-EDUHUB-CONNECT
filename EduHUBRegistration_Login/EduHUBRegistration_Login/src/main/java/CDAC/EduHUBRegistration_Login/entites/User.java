package CDAC.EduHUBRegistration_Login.entites;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	private String email;
	private String fullName;
	@Column(name = "username")
	private String userName;
	@Column(name = "password" )
	private String password; 
	private long phoneNo;
	private String state;
	private String city;
	private int pincode;
	private String role;
	
}
