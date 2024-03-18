package CDAC.EduHUBStudyMaterial.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import CDAC.EduHUBStudyMaterial.feign.StudyMaterialInterface;
import CDAC.EduHUBStudyMaterial.model.FileData;
import CDAC.EduHUBStudyMaterial.model.FileWrapper;
import CDAC.EduHUBStudyMaterial.model.Subject;
import CDAC.EduHUBStudyMaterial.repository.StudyMaterialRepository;
import CDAC.EduHUBStudyMaterial.repository.SubjectRepository;
import CDAC.EduHUBStudyMaterial.util.FileUtils;

@Service
public class StudyMaterialService {
	@Autowired
    private StudyMaterialRepository repository;
	@Autowired
	private SubjectRepository subjectRepository;
	@Autowired
	StudyMaterialInterface studyMaterialInterface;
	
	public String uploadFile(MultipartFile file, int subjectId) throws IOException {
        FileData fileData = repository.save(FileData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .fileData(FileUtils.compressFile(file.getBytes()))
                .subject(subjectRepository.findById(subjectId).get()).build());
        if (fileData != null) {
            return "file uploaded successfully : " + file.getOriginalFilename();
        }
        return null;
    }
	
	public byte[] downloadFile(String fileName) {
        Optional<FileData> dbFileData = repository.findByName(fileName);
        byte[] file = FileUtils.decompressFile(dbFileData.get().getFileData());
        return file;
    }

	public String getById(int fileId) {
		FileData file = repository.findById(fileId).get();
		return file.getName();
	}

	public List<FileWrapper> getFileBySubject(int subjectId) {
		List<FileData> assignments = repository.findBySubjectId(subjectId);
		List<FileWrapper> wrappers = new ArrayList<FileWrapper>();
		for(FileData assignment : assignments) {
			FileWrapper wrapper = new FileWrapper();
			wrapper.setId(assignment.getId());
			wrapper.setName(assignment.getName());
			wrappers.add(wrapper);
		}
		return wrappers;
	}

	public Subject addSub(int subjectId) {
		Subject subject = studyMaterialInterface.getSubject(subjectId).getBody();
		if(subject != null) {
			return subjectRepository.save(subject);
		}else {
			return null;
		}	
	}
}
