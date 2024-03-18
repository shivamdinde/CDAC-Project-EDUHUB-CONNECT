package CDAC.EduHUBStudyMaterial.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Subject {
	@Id
	@GeneratedValue
	private int id;
	private String name;
	
	@OneToMany(mappedBy = "subject")
    private List<FileData> files;
}
