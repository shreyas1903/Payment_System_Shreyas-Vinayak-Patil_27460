import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { BillRegistrationComponent } from './bill-registration/bill-registration.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { CreditCardPaymentComponent } from './credit-card-payment/credit-card-payment.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  // {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: '', component: FirstpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'firstpage', component: FirstpageComponent},
  {path: 'userlogin', component: UserloginComponent},
  {path: 'billregistration', component:BillRegistrationComponent},
  {path: 'userdashboard', component:UserdashboardComponent},
  {path: 'make-payment', component:MakePaymentComponent},
  {path: 'credit_card', component:CreditCardPaymentComponent},




  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
