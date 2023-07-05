import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  accountId: number;
  account: Account = new Account();
  constructor(private accountService: AccountService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.accountId = this.route.snapshot.params['accountId'];
    this.account = new Account();
    this.accountService.getAccountById(this.accountId).subscribe(data => {
      this.account = data;
    })
  }

}
