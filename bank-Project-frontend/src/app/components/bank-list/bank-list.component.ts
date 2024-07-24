import { Component, OnInit } from '@angular/core';
import { Bank } from '../../model/bank';
import { BankServiceService } from '../../service/bank-service.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrl: './bank-list.component.css'
})
export class BankListComponent implements OnInit{
  
  banks:Bank[]=[];
 
  constructor(private service:BankServiceService){

  }

  ngOnInit(): void {
    // console.log(this.banks);
    this.getAllRecords();
    
  }
  getAllRecords()
  {
    this.service.getAllRecordBanks().subscribe(data=>
    {
      // console.log(data);
      this.banks=data;
    }
    )
  }



}
