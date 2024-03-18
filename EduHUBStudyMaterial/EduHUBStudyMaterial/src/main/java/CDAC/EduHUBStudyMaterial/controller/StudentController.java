package CDAC.EduHUBStudyMaterial.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CDAC.EduHUBStudyMaterial.model.FileWrapper;
import CDAC.EduHUBStudyMaterial.service.StudyMaterialService;
import CDAC.EduHUBStudyMaterial.util.FileUtils;

@RestController
@RequestMapping("/student/studymaterial")
public class StudentController {
	@Autowired
	private StudyMaterialService service;
	
	@GetMapping("/{fileName}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String fileName) {
        byte[] fileData = service.downloadFile(fileName);
        String contentType = FileUtils.determineContentType(fileName);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(contentType));

        return ResponseEntity.ok()
                .headers(headers)
                .body(fileData);
    }
    
    @GetMapping("/{fileId}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable int fileId) {
    	String fileName = service.getById(fileId);
        byte[] fileData = service.downloadFile(fileName);
        String contentType = FileUtils.determineContentType(fileName);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(contentType));

        return ResponseEntity.ok()
                .headers(headers)
                .body(fileData);
    }
    
    @GetMapping("/getAll/{subjectId}")
    public ResponseEntity<List<FileWrapper>> getAssignmentBySubject(@PathVariable int subjectId){
    	List<FileWrapper> assignments = service.getFileBySubject(subjectId);
    	return ResponseEntity.status(HttpStatus.OK)
    			.body(assignments);
    }
}
