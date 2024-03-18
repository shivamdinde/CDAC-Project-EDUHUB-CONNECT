package CDAC.EduHUBStudyMaterial.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import CDAC.EduHUBStudyMaterial.model.Subject;

@FeignClient("EduHubSubject")
public interface StudyMaterialInterface {
	@GetMapping("admin/subject/get/{subjectId}")
	public ResponseEntity<Subject> getSubject(@PathVariable int subjectId);
}
