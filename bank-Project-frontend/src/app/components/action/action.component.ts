import { Component, OnInit } from '@angular/core';
import { BankServiceService } from '../../service/bank-service.service';
import { Bank } from '../../model/bank';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrl: './action.component.css'
})
export class ActionComponent implements OnInit{
  
  banks:Bank[]=[];
  bankId !:number;
 
  constructor(private service:BankServiceService,private router:Router){

  }

  ngOnInit(): void {
    console.log(this.banks);
    this.getAllRecords();
    
  }
  getAllRecords()
  {
    this.service.getAllRecordBanks().subscribe(data=>
    {
      console.log(data);
      this.banks=data;
    }
    )
  }

  deleteRecord(bankId:number){
    console.log("bankId",bankId);
    this.bankId=bankId;
    this.service.deleteRecord(this.bankId).subscribe(()=>{
         alert("are you sure! you want to delete record?");
         this.getAllRecords();
    })

  }

  viewDetails(bankId:number)
  {
    this.router.navigate(['viewDetails',bankId]);
    console.log("bankId= ",bankId);
  }

  updateBankDetails(bankId:number)
  {
    this.router.navigate(['updateDetails',bankId]);
  }

}
