import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BankListComponent } from './components/bank-list/bank-list.component';
import { ActionComponent } from './components/action/action.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { UpdateBankDetailsComponent } from './components/update-bank-details/update-bank-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddBankComponent,
    HomepageComponent,
    BankListComponent,
    ActionComponent,
    ViewDetailsComponent,
    UpdateBankDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
