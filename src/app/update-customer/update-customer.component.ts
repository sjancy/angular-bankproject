import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from '../bank';
import { CustomerbankService } from '../customerbank.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id: number;
  bank: Bank = new Bank();
  constructor(private customerbankService: CustomerbankService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerbankService.getCustomerById(this.id).subscribe(data => {
      this.bank = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.customerbankService.updateCustomer(this.id, this.bank).subscribe(data => {
      this.goToCustomerList();
    }, error => console.log(error));
  }

  goToCustomerList() {
    this.router.navigate(['/banks']);
  }

}
