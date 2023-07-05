import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service'
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.getAccountList();
  }

  private getAccountList() {
    this.accountService.getCustomerAccountList().subscribe(data => {
      console.log(data);
      this.accounts = data;
    });
  }


  updateaccount(accountId: number) {
    this.router.navigate(['account-update', accountId]);
  }

  deleteaccount(accountId: number) {
    this.accountService.deleteAccount(accountId).subscribe(data => {
      this.getAccountList();
    })
  }

  viewaccount(accountId: number) {
    this.router.navigate(['account-view', accountId]);
  }

}
