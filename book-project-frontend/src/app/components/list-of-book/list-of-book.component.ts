import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../service/book-service.service';
import { Book } from '../../model/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-book',
  templateUrl: './list-of-book.component.html',
  styleUrls: ['./list-of-book.component.css']
})
export class ListOfBookComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    console.log("Fetching all books...");
    this.bookService.getAllBook().subscribe(
      (data: Book[]) => {
        this.books = data;
        console.log('Fetched books:', this.books);
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  deleteBooks(bookId: number): void {
    this.bookService.deleteBookRecord(bookId).subscribe(
      () => {
        console.log(`Book with ID ${bookId} deleted successfully`);
        this.getAll(); // Refresh the list after deletion
      },
      (error) => {
        console.error('Error deleting book:', error);
      }
    );
  }

  updateBooks(bookId:number)
  {
     this.router.navigate(["update-book",bookId]);
  }

}
