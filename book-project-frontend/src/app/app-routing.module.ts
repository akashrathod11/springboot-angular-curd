import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { ListOfBookComponent } from './components/list-of-book/list-of-book.component';
import { UpdateBooksComponent } from './components/update-books/update-books.component';

const routes: Routes = [
{
  path:"add",
  component:CreateBookComponent
},
{
  path:"listbook",
  component:ListOfBookComponent
},{
  path:"",
  component:ListOfBookComponent
},
{
  path:"update-book/:bookId",
  component:UpdateBooksComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
