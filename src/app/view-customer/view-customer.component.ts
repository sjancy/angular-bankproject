import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bank } from '../bank';
import { CustomerbankService } from '../customerbank.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  id: number
  bank: Bank
  constructor(private route: ActivatedRoute, private customerbankService: CustomerbankService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bank = new Bank();
    this.customerbankService.getCustomerById(this.id).subscribe(data => {
      this.bank = data;
    });
  }

}
