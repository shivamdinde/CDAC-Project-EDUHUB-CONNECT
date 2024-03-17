package CDAC.EduHUBClassSchedule.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import CDAC.EduHUBClassSchedule.model.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Integer>{

	
	Optional<Teacher> findById(Integer teacher_id);
	
}
