package com.vlanto.studentsystem.controller;

import java.util.List;

import com.vlanto.studentsystem.model.Student;
import com.vlanto.studentsystem.service.StudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/student")
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/add")
	public String add(@RequestBody Student student) {
		studentService.saveStudent(student);
		return "New student is added";
	}
	
	@GetMapping("/getAll")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}
	
	@GetMapping("/get/{id}")
	public Student getStudentById(@PathVariable int id) {
	    return studentService.getStudent(id);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteStudentById(@PathVariable int id) {
		studentService.deleteStudent(id);
		return "Student with Id " + id + " has been deleted.";
	}
}
