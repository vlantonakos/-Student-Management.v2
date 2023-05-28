package com.vlanto.studentsystem.service;

import java.util.List;

import com.vlanto.studentsystem.exception.NoStudentExistsException;
import com.vlanto.studentsystem.model.Student;
import com.vlanto.studentsystem.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}
	
	@Override
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}
	
	@Override
	public Student getStudent(int id) {
		try {
			return studentRepository.findById(id).get();
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}
	
    @Override
    public void deleteStudent(int id) {
    	Student existingStudent = studentRepository.findById(id).orElseThrow(() -> new NoStudentExistsException("Student with ID " + id + " does not exist."));
    	studentRepository.deleteById(id);
    }
    
}
