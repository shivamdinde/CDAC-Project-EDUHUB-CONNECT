package CDAC.EduHUBStudyMaterial.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import CDAC.EduHUBStudyMaterial.model.FileWrapper;
import CDAC.EduHUBStudyMaterial.model.Subject;
import CDAC.EduHUBStudyMaterial.service.StudyMaterialService;
import CDAC.EduHUBStudyMaterial.util.FileUtils;

@RestController
@RequestMapping("/admin/studymaterial")
@CrossOrigin
public class AdminController {
	@Autowired
	private StudyMaterialService service;
	
	@PostMapping
	public ResponseEntity<?> uploadFile(@RequestParam("file")MultipartFile file,@RequestParam("subject") int subjectId) throws IOException {
		String uploadFile = service.uploadFile(file, subjectId);
		return ResponseEntity.status(HttpStatus.OK)
				.body(uploadFile);
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
    public ResponseEntity<List<FileWrapper>> getFileBySubject(@PathVariable int subjectId){
    	List<FileWrapper> file = service.getFileBySubject(subjectId);
    	return ResponseEntity.status(HttpStatus.OK)
    			.body(file);
    }
    
    @PostMapping("addSub/{subjectId}")
    public ResponseEntity<Subject> addSubject(@PathVariable int subjectId){
    	Subject subject = service.addSub(subjectId);
    	if(subject != null) {
    		return ResponseEntity.status(HttpStatus.CREATED).body(subject);
    	}
    	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(subject);
    }
}
