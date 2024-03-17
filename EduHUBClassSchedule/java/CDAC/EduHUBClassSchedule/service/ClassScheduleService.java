package CDAC.EduHUBClassSchedule.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import CDAC.EduHUBClassSchedule.model.ClassSchedule;
import CDAC.EduHUBClassSchedule.model.Subject;
import CDAC.EduHUBClassSchedule.model.Teacher;
import CDAC.EduHUBClassSchedule.repository.ClassScheduleRepostiory;
import CDAC.EduHUBClassSchedule.repository.SubjectRepository;
import CDAC.EduHUBClassSchedule.repository.TeacherRepository;

	@Service
public class ClassScheduleService {

	    private final ClassScheduleRepostiory classScheduleRepository;
	    private final TeacherRepository teacherRepository;
	    private final SubjectRepository subjectRepository;

	    public ClassScheduleService(ClassScheduleRepostiory classScheduleRepository, TeacherRepository teacherRepository,
	                                SubjectRepository subjectRepository) {
	        this.classScheduleRepository = classScheduleRepository;
	        this.teacherRepository = teacherRepository;
	        this.subjectRepository = subjectRepository;
	    }
	    
	 // Class Schedule
	    public ResponseEntity<List<ClassSchedule>> getAllList() {
	        List<ClassSchedule> classSchedules = classScheduleRepository.findAll();
	        return new ResponseEntity<>(classSchedules, HttpStatus.OK);
	    }

	    public ResponseEntity<ClassSchedule> saveClassSchedule(ClassSchedule classSchedule) {
	        ClassSchedule savedClassSchedule = classScheduleRepository.save(classSchedule);
	        return new ResponseEntity<>(savedClassSchedule, HttpStatus.CREATED);
	    }
	    
	    
	    // Teacher CRUD
	    public ResponseEntity<List<Teacher>> getAllTeacher() {
	        List<Teacher> teachers = teacherRepository.findAll();
	        return new ResponseEntity<>(teachers, HttpStatus.OK);
	    }

	    public ResponseEntity<String> saveTeacher(Teacher teacher) {
	        teacherRepository.save(teacher);
	        return new ResponseEntity<>("Teacher saved successfully", HttpStatus.CREATED);
	    }

	    public ResponseEntity<Void> deleteTeacher(Integer id) {
	        teacherRepository.deleteById(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }

	    public ResponseEntity<List<Teacher>> findAllTeachers() {
	        List<Teacher> teachers = teacherRepository.findAll();
	        return new ResponseEntity<>(teachers, HttpStatus.OK);
	    }

	    public ResponseEntity<Teacher> getById(Integer id) {
	        Optional<Teacher> teacherOptional = teacherRepository.findById(id);
	        return teacherOptional.map(teacher -> new ResponseEntity<>(teacher, HttpStatus.OK))
	                               .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	    }

	    // Subject CRUD
	    public ResponseEntity<List<Subject>> getAllSubject() {
	        List<Subject> subjects = subjectRepository.findAll();
	        return new ResponseEntity<>(subjects, HttpStatus.OK);
	    }

	    public ResponseEntity<String> saveSubject(Subject subject) {
	        subjectRepository.save(subject);
	        return new ResponseEntity<>("Subject saved successfully", HttpStatus.CREATED);
	    }

	    public ResponseEntity<List<Subject>> findAllSubjects() {
	        List<Subject> subjects = subjectRepository.findAll();
	        return new ResponseEntity<>(subjects, HttpStatus.OK);
	    }

	    public ResponseEntity<Subject> getBySubId(Integer id) {
	        Optional<Subject> subjectOptional = subjectRepository.findById(id);
	        return subjectOptional.map(subject -> new ResponseEntity<>(subject, HttpStatus.OK))
	                              .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	    }
	
	/*
	////Class Schedule 
	public List<ClassSchedule> getAllList(){
		return classScheduleRepostiory.findAll();
	}
	public ClassSchedule saveClassSchedule(ClassSchedule classSchedule) {	
		return classScheduleRepostiory.save(classSchedule);
	}
	
	
	
	//////Teacher CRUD
	public List<Teacher> getAllTeacher(){
		return teacherRepository.findAll();
	}
	public boolean saveTeacher(Teacher teacher) {
		teacherRepository.save(teacher);
		return true;
	}

	public void deleteTeacher(Integer id) {
		 teacherRepository.deleteById(id);
	}
	
	public List<Teacher> findAllTeachers(){
		return teacherRepository.findAll();
	}
	
	public Optional<Teacher> getById(Integer id) {
		return teacherRepository.findById(id);
	}
	
	///SubjectCRUD
	public List<Subject> getAllSubject(){
		return subjectRepository.findAll();
	}
	
	public ResponseEntity<String> saveSubject(Subject subject) {
			subjectRepository.save(subject);
		return new ResponseEntity<String>("success",HttpStatus.CREATED);
	}
	public List<Subject> findAllSubjects(){
		return subjectRepository.findAll();
	}
	public Optional<Subject> getBySubId(Integer id) {
		return subjectRepository.findById(id);
	}
	
	*/
	
	
	
}

