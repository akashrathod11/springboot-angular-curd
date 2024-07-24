import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../model/bank';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {
 baseUrl='http://localhost:8089'

  constructor(private http:HttpClient) { }


  createBank(bank:Bank):Observable<any>{
    // console.log("hello",bank);
   return  this.http.post(`${this.baseUrl}/addBank`,bank);
  }

  getAllRecordBanks():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/all`);
  }

  deleteRecord(bankId:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/deleteBank/${bankId}`);
  }

  getRecordById(bankId:number):Observable<any>
  {
   return this.http.get(`${this.baseUrl}/getid/${bankId}`);
  }

  updateBankDetails(bankId:number,bank:Bank):Observable<any>
  {
    return this.http.put(`${this.baseUrl}/update/${bankId}`,bank);
  }

}

