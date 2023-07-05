import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {
  accountId: number;
  account: Account = new Account();
  constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.accountId = this.route.snapshot.params['accountId'];
    this.accountService.getAccountById(this.accountId).subscribe(data => {
      this.account = data;
    }, error => console.log(error));
  }


  onSubmit() {
    this.accountService.updateAccountById(this.accountId, this.account).subscribe(data => {
      this.goToAccountList();
    }, error => console.log(error));

  }

  goToAccountList() {
    this.router.navigate(['/accounts']);
  }

}
