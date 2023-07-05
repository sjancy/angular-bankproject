import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  account: Account = new Account();
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  saveAccount() {
    this.accountService.addCustomerAccount(this.account).subscribe(data => {
      console.log(data);
      this.goToAccountList();
    },
      error => console.log(error));
  }

  goToAccountList() {
    this.router.navigate(['/accounts']);
  }

  onSubmit() {
    console.log(this.account);
    this.saveAccount();

  }

}
