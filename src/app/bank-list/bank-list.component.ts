import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../bank';
import { CustomerbankService } from '../customerbank.service'
@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  banks: Bank[];
  constructor(private customerbankService: CustomerbankService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBankList();
  }

  private getBankList() {
    this.customerbankService.getCustomerBankList().subscribe(data => {
      this.banks = data;
    });
  }

  updateCustomer(id: number) {
    this.router.navigate(['update-customer', id]);
  }

  viewCustomer(id: number) {
    this.router.navigate(['view-customer', id]);
  }

  deleteBankCustomer(id: number) {
    this.customerbankService.deleteCustomer(id).subscribe(data => {
      this.getBankList();
    })
  }

}
