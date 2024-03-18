package CDAC.EduHUBStudyMaterial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import CDAC.EduHUBStudyMaterial.model.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {

	Subject findByName(String subjectName);

}
