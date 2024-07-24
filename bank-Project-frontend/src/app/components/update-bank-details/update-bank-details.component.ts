import { Component, OnInit } from '@angular/core';
import { Bank } from '../../model/bank';
import { BankServiceService } from '../../service/bank-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-bank-details',
  templateUrl: './update-bank-details.component.html',
  styleUrl: './update-bank-details.component.css'
})
export class UpdateBankDetailsComponent implements OnInit {
  bank:Bank=new Bank();

  bankId!:number;
  constructor(private bankService:BankServiceService,private activerouter:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.bankId=this.activerouter.snapshot.params['bankId'];
    this.bankService.getRecordById(this.bankId).subscribe((data)=>{
      this.bank=data;

    })
  }


  updateBank(){
    this.bankService.updateBankDetails(this.bankId,this.bank).subscribe((data)=>
    {
     
      alert("details update successfully");
      this.router.navigate(["/listBank"])
    })
      
  }

}
