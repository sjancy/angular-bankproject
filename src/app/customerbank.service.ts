import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Bank } from './bank';
@Injectable({
  providedIn: 'root'
})
export class CustomerbankService {

  private baseURL = "http://localhost:8080/api/v1/bankcustomer";
  constructor(private httpClient: HttpClient) { }

  getCustomerBankList(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]>(this.baseURL);
  }

  AddCustomer(bank: Bank): Observable<Object> {
    return this.httpClient.post(this.baseURL, bank);
  }

  getCustomerById(id: number): Observable<Bank> {
    return this.httpClient.get<Bank>(this.baseURL + '/' + id);
  }

  updateCustomer(id: number, bank: Bank): Observable<Object> {
    return this.httpClient.put(this.baseURL + '/' + id, bank)
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL + '/' + id);
  }
}
