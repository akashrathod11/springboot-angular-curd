import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../../service/book-service.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrl: './update-books.component.css'
})
export class UpdateBooksComponent implements OnInit{
  
  bookId !:number;
  book:Book=new Book();
  
  constructor(private activeRoute: ActivatedRoute,private bookService:BookServiceService, private router:Router){}

  ngOnInit(): void {
  this.bookId=this.activeRoute.snapshot.params['bookId'];
  // console.log(this.bookId);
  this.bookService.getRecordUsingId(this.bookId).subscribe((data)=>{
    this.book=data;
    // console.log(this.book)
  })
   
  }
  updateBook(){
    
    this.bookService.uppdateBook(this.book,this.bookId).subscribe((data)=>{
      alert("update sucessfully");
      this.router.navigate(['/listbook']);
    })
    

  }

}
