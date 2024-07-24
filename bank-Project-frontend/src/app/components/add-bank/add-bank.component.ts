import { Component, OnInit } from '@angular/core';
import { Bank } from '../../model/bank';
import { BankServiceService } from '../../service/bank-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrl: './add-bank.component.css'
})
export class AddBankComponent {
  bank:Bank=new Bank();
  
  constructor(private bankService:BankServiceService,private router:Router) {}
  
  
 
  addBank(){
    this.bankService.createBank(this.bank).subscribe(data=>{
      alert("Record inserted successfully")
      this.bankList();
    },(error) => {
      console.error('Error adding book:', error);
      alert(`Error inserting record: ${error.message}`);
    });
    
  }
  bankList(){
     this.router.navigate(["/listBank"]);
  }

}
