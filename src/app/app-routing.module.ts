import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AccountViewComponent } from './account-view/account-view.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddCustomerbankComponent } from './add-customerbank/add-customerbank.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [
  { path: 'banks', component: BankListComponent },
  { path: '', redirectTo: 'banks', pathMatch: 'full' },
  { path: 'add-customerbank', component: AddCustomerbankComponent },
  { path: 'update-customer/:id', component: UpdateCustomerComponent },
  { path: 'view-customer/:id', component: ViewCustomerComponent },
  { path: 'add-account', component: AddAccountComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'account-update/:accountId', component: AccountUpdateComponent },
  { path: 'account-view/:accountId', component: AccountViewComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'add-transaction', component: AddTransactionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
