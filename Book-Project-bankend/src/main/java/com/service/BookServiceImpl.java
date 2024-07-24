package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.BookRepo;
import com.model.Book;
@Service
public class BookServiceImpl implements BookService{

	@Autowired
    private	BookRepo bookRepo;
	@Override
	public Book addBook(Book b) {
		
		return bookRepo.save(b);
	}

	@Override
	public List<Book> showAllBooks() {
		List<Book> books=bookRepo.findAll();
		if(books.isEmpty())
		{
			throw new RuntimeException("record are not present");
		}
		
		return books;
	}

	@Override
	public Book showUsingIdBook(Long id) {
		Optional<Book> book=bookRepo.findById(id);
		if(book.isEmpty())
		{
			throw new RuntimeException("This id is not present");
		}
		Book book2=book.get();
		return book2;
	}

	@Override
	public void deleteBookRecords(Long id) {
		Optional<Book> book=bookRepo.findById(id);
		if(book.isEmpty())
		{
			throw new RuntimeException("this id is not present");
		}
	
	     bookRepo.deleteById(id);
		
	}

	@Override
	public Book updBook(Book b, Long id) {
		Optional<Book> book=bookRepo.findById(id);
		if(book.isEmpty())
		{
			throw new RuntimeException("this id is not present in the database!!");
		}
		Book b1=book.get();
		b1.setBookId(b.getBookId());
		b1.setBookName(b.getBookName());
		b1.setPrice(b.getPrice());
		
		return bookRepo.save(b1);
	}

}
