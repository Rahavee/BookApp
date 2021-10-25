import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { EmployeeDeetsComponent } from './employee-deets/employee-deets.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'employees', component: BookComponent},
  {path:'employee/:id', component:EmployeeDeetsComponent},
  {path:'**', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
