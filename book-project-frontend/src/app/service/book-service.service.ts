import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
 
  baseURL = 'http://localhost:8181';
  // baseURL2='http://localhost:8181/getAllRecords'

  constructor(private http: HttpClient) { }

  addBookInDatabase(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseURL}/add`, book);
  }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseURL}/getAllRecords`);
  }

  deleteBookRecord(bookId: number): Observable<any> {
  
    return this.http.delete(`${this.baseURL}/delete/${bookId}`);
  
  }

  getRecordUsingId(bookId:number):Observable<any>{
    return this.http.get(`${this.baseURL}/getbyid/${bookId}`);
  }

  uppdateBook(book:Book,bookId:number):Observable<any>{
   console.log(book);
    return this.http.put<Book>(`${this.baseURL}/update/${bookId}`,book);
  }
}
