package CDAC.EduHUBStudyMaterial.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import CDAC.EduHUBStudyMaterial.model.FileData;

public interface StudyMaterialRepository extends JpaRepository<FileData, Integer> {
	Optional<FileData> findByName(String fileName);

	List<FileData> findBySubjectId(int subjectId);
}
