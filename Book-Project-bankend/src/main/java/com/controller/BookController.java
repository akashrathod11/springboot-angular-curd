package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.model.Book;
import com.service.BookService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@PostMapping("/add")
	public Book save(@RequestBody Book b1) {
		
		return bookService.addBook(b1);
		
//		return ResponseEntity.status(HttpStatus.CREATED).body("record insert successfully");
		
	}
	
	@GetMapping("/getAllRecords")
     public List<Book> showAllBooks() {
		
		return bookService.showAllBooks();
	 }
	
	@GetMapping("/getbyid/{id}")
	public Book getbyid(@PathVariable Long id)
	{
		
		return bookService.showUsingIdBook(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable Long id)
	{
		bookService.deleteBookRecords(id);
//		return ResponseEntity.status(HttpStatus.OK).body("record deleted successfully");
	}
	
	@PutMapping("update/{id}")
	public Book update(@PathVariable Long id, @RequestBody Book b) {
		
		
		return bookService.updBook(b, id);
	}

}
