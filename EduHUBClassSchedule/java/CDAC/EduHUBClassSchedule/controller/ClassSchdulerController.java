package CDAC.EduHUBClassSchedule.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import CDAC.EduHUBClassSchedule.model.ClassSchedule;
import CDAC.EduHUBClassSchedule.model.Subject;
import CDAC.EduHUBClassSchedule.model.Teacher;
import CDAC.EduHUBClassSchedule.service.ClassScheduleService;

@RestController
//@Controller
//@RequestMapping("classSchedule")
public class ClassSchdulerController {
	
	
	@Autowired
    private final ClassScheduleService classScheduleService;

    public ClassSchdulerController(ClassScheduleService classScheduleService) {
        this.classScheduleService = classScheduleService;
    }

    @PostMapping("/addSubject")
    public ResponseEntity<String> addingSubject(@RequestParam("subject_code") String subject_code, @RequestParam("subject_name") String subject_name) {
        try {
            Subject sub = new Subject();
            sub.setSubjectCode(subject_code);
            sub.setSubjectName(subject_name);
            classScheduleService.saveSubject(sub);
            return ResponseEntity.ok("Successfully added");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred");
        }
    }

    @PostMapping("/addTeacher")
    public ResponseEntity<String> addingTeacher(@RequestParam String teacherName, @RequestParam long phoneNo,
                                                 @RequestParam String email) {
        try {
            Teacher t = new Teacher(teacherName, phoneNo, email);
            classScheduleService.saveTeacher(t);
            return ResponseEntity.ok("Successfully added");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred");
        }
    }

    @GetMapping("/addSchedule")
    public String getClassSchedule(Model model) {
        model.addAttribute("teachers", classScheduleService.findAllTeachers());
        model.addAttribute("subjects", classScheduleService.findAllSubjects());
        return "addSchedule";
    }

    @PostMapping("/addSchedule")
    public ResponseEntity<String> addClassSchedule(@RequestParam("teacher") int teacher, @RequestParam("subject") int subject,
                                                    @RequestParam("time") String time, @RequestParam("date") String date) {
        try {
            ClassSchedule schedule = new ClassSchedule();
            ResponseEntity<Teacher> teacher1 = classScheduleService.getById(teacher);
            ResponseEntity<Subject> subject1 = classScheduleService.getBySubId(subject);
            schedule.setSubject(subject1.getBody());
            schedule.setTeacher(teacher1.getBody());
            schedule.setDate(date);
            schedule.setTime(time);
            classScheduleService.saveClassSchedule(schedule);
            return ResponseEntity.ok("Successfully added");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred");
        }
    }

    @GetMapping("/success")
    public String viewClassSchedule(Model model) {
        model.addAttribute("schedules", classScheduleService.getAllList());
        return "success";
    }
	
	
	/*
	 * @Autowired private ClassScheduleService classScheduleService;
	 * 
	 * 
	 * public ResponseEntity<String> addSubjects(@RequestParam String
	 * subjectCode,@RequestParam String subjectName){
	 * 
	 * Subject subject = new Subject(); subject.setSubjectCode(subjectCode);
	 * subject.setSubjectName(subjectName); return
	 * classScheduleService.saveSubject(subject); }
	 */
	
	
	
	/*	
	@GetMapping("/addSubject")
	public String getFirst(Model model) {
		return "addSubject";
	}
	
	@GetMapping("/addTeacher")
	public String getSecond(Model model) {
		return "addTeacher";
	}
	
	@PostMapping("/addSubject")
	public String addingSubject(@RequestParam String subjectCode,@RequestParam String subjectName , RedirectAttributes redirectAttributes) {
		try {
			Subject sub = new Subject();
			sub.setSubjectCode(subjectCode);
			sub.setSubjectName(subjectName);
			boolean added = classScheduleService.saveSubject(sub);
				if(added==true) {
					 redirectAttributes.addFlashAttribute("successMessage","Successfully added");
				}else {
					 redirectAttributes.addFlashAttribute("error","Error found");
				}
 
			}catch(Exception e) {
				e.printStackTrace();
			}
		return "redirect:/addSubject";
	}
	
	@PostMapping("/addTeacher")
	public String addingTeacher(@RequestParam String teacherName, 
			@RequestParam long phoneNo, @RequestParam String email,  RedirectAttributes redirectAttributes) {
		try {
				Teacher t = new Teacher(teacherName, phoneNo, email);
				if(classScheduleService.saveTeacher(t)==true) {
					redirectAttributes.addFlashAttribute("successMessage","Successfully added");
				}else {
					redirectAttributes.addFlashAttribute("error","Error found");
				}
				
				
				
 
			}catch(Exception e) {
				e.printStackTrace();
			}
		return "redirect:/addTeacher";
	}
	
	
	
	@GetMapping("/addSchedule")
	public String getClassSchedule(Model model) {
		
		List<Teacher> teachers = classScheduleService.findAllTeachers();
		List<Subject> subjects = classScheduleService.findAllSubjects();
		
		model.addAttribute("teachers", teachers);
		model.addAttribute("subjects", subjects);
		
		return "addSchedule";
	}
	
	
	@PostMapping("/addSchedule")
	public String addClassSchedule( @RequestParam("teacher") int teacher, @RequestParam("subject") int subject,
			@RequestParam("time") String time,@RequestParam("date") String date,
			RedirectAttributes redirectAttributes) {
		try {
			ClassSchedule schedule = new ClassSchedule();
			
			Optional<Teacher> teacher1 = classScheduleService.getById(teacher);
			Optional<Subject> subject1 = classScheduleService.getBySubId(subject);
			schedule.setSubject(subject1.get());
			schedule.setTeacher(teacher1.get());
			schedule.setDate(date);
			schedule.setTime(time);
			
			ClassSchedule schedules = classScheduleService.saveClassSchedule(schedule);
			
			redirectAttributes.addFlashAttribute("successMessage","Successfully added");
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		//redirectAttributes.addFlashAttribute("successMessage","Successfully added");
		return "redirect:/addSchedule";
	}
	
	@GetMapping("/success")
	public String viewClassSchdule(Model model) {
		
		List<ClassSchedule> sche = classScheduleService.getAllList();
		model.addAttribute("schedules",sche);
		return "success";
	}
	
	
	*/
}
