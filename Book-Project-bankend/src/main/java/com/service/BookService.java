package com.service;

import java.util.List;

import com.model.Book;

public interface BookService {
	
	public Book addBook(Book b);
	public List<Book> showAllBooks();
	public Book showUsingIdBook(Long id);
	public void deleteBookRecords(Long id);
	public Book updBook(Book b,Long id);

}
