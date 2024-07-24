import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BankListComponent } from './components/bank-list/bank-list.component';
import { ActionComponent } from './components/action/action.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { UpdateBankDetailsComponent } from './components/update-bank-details/update-bank-details.component';

const routes: Routes = [
  {
    path:"home",
    component:HomepageComponent
  },
  {
    path:"",
    component:HomepageComponent
  },
{
  path:"addBank",
  component:AddBankComponent
},
{
  path:"listBank",
  component:BankListComponent
},{
  path:"action",
  component:ActionComponent
},
{
  path:"viewDetails/:bankId",
  component:ViewDetailsComponent
},
{
  path:"updateDetails/:bankId",
  component:UpdateBankDetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
