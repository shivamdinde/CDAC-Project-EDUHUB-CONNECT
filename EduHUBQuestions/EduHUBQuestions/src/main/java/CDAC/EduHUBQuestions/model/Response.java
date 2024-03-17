package CDAC.EduHUBQuestions.model;


import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class Response {

	private Integer id;
    private String response;
    
	public Response(Integer id, String response) {
		super();
		this.id = id;
		this.response = response;
	}
    
    
	
}
