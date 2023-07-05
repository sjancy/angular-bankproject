import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { AddCustomerbankComponent } from './add-customerbank/add-customerbank.component';
import { FormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AccountViewComponent } from './account-view/account-view.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component'
@NgModule({
  declarations: [
    AppComponent,
    BankListComponent,
    AddCustomerbankComponent,
    UpdateCustomerComponent,
    ViewCustomerComponent,
    AddAccountComponent,
    AccountListComponent,
    AccountUpdateComponent,
    AccountViewComponent,
    TransactionListComponent,
    AddTransactionComponent
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
