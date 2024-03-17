package CDAC.EduHUBClassSchedule.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import CDAC.EduHUBClassSchedule.model.Subject;
import CDAC.EduHUBClassSchedule.model.Teacher;


public interface SubjectRepository extends JpaRepository<Subject, Integer>{

	Optional<Subject> findById(Integer subject_id);
}
