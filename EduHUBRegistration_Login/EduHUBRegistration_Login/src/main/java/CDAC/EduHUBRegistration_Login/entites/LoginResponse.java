package CDAC.EduHUBRegistration_Login.entites;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginResponse {
    private String redirectUrl;
    private String message;

    // getters and setters
}