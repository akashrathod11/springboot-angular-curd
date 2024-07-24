import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookServiceService } from '../../service/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book();

  constructor(private bookService: BookServiceService, private router: Router) {}

  ngOnInit(): void {}

  addBook(): void {
    this.bookService.addBookInDatabase(this.book).subscribe(
      (data) => {
        alert("Record inserted successfully");
        this.bookList(); // Navigate to book list after successful addition
      },
      (error) => {
        console.error('Error adding book:', error);
        alert(`Error inserting record: ${error.message}`);
      }
    );
  }
  

  bookList(): void {
    this.router.navigate(['/listbook']);
  }
}
