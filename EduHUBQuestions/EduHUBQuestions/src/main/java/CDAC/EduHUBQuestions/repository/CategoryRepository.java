package CDAC.EduHUBQuestions.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import CDAC.EduHUBQuestions.model.Category;
import CDAC.EduHUBQuestions.model.Question;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

	//void save(Category category);
	Optional<Category> findById(Integer subject_id);

}
  