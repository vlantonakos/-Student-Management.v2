package com.vlanto.studentsystem.exception;

public class NoStudentExistsException extends RuntimeException {

	private String message;
	
	public NoStudentExistsException() {}
	
    public NoStudentExistsException(String msg)
    {
        super(msg);
        this.message = msg;
    }
}
