import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { EmployeeListComponent } from './employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { BillRegistrationComponent } from './bill-registration/bill-registration.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { CreditCardPaymentComponent } from './credit-card-payment/credit-card-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    FirstpageComponent,
    UserloginComponent,
    BillRegistrationComponent,
    UserdashboardComponent,
    MakePaymentComponent,
    CreditCardPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
