package com.vlanto.studentsystem.repository;

import com.vlanto.studentsystem.model.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>{

}
