import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  transaction: Transaction = new Transaction();
  constructor(private transactionService: TransactionService,
    private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.saveTransaction();
  }

  goToTransactionList() {
    this.router.navigate(['/transactions']);
  }

  saveTransaction() {
    this.transactionService.addTransaction(this.transaction).subscribe(data => {
      console.log(data);
      this.goToTransactionList();
    })
  }

}
