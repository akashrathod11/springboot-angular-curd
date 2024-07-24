import { Component, OnInit } from '@angular/core';
import { BankServiceService } from '../../service/bank-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Bank } from '../../model/bank';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent implements OnInit{

  bank:Bank=new Bank();
  bankId!:number;

  constructor(private service: BankServiceService, private activeRoute: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.bankId = this.activeRoute.snapshot.params['bankId'];
   
    this.getUsingRecordById(this.bankId);
    
  }
 
  getUsingRecordById(bankId:number){
    
    this.service.getRecordById(bankId).subscribe((data)=>
    {
     this.bank=data;
    })
    
  }


}
