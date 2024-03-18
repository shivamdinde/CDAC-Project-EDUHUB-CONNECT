package CDAC.EduHUBStudyMaterial.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@Table(name = "StudyMaterial")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FileData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    @Lob
    @Column(name = "filedata",length = 100000)
    private byte[] fileData;
    
    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;
}
