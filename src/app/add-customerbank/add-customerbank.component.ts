import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../bank';
import { CustomerbankService } from '../customerbank.service';

@Component({
  selector: 'app-add-customerbank',
  templateUrl: './add-customerbank.component.html',
  styleUrls: ['./add-customerbank.component.css']
})
export class AddCustomerbankComponent implements OnInit {

  bank: Bank = new Bank();
  constructor(private customerbankService: CustomerbankService, private router: Router) { }

  ngOnInit(): void {
  }

  saveCustomer() {
    this.customerbankService.AddCustomer(this.bank).subscribe(data => {
      console.log(data);
      this.goToCustomerList();
    },
      error => console.log(error));
  }

  goToCustomerList() {
    this.router.navigate(['/banks']);
  }
  onSubmit() {
    console.log(this.bank);
    this.saveCustomer();
  }

}
