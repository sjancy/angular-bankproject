import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Account } from './account';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseURL = "http://localhost:8080/api/v1/accountbankdetails";
  constructor(private httpClient: HttpClient) { }

  getCustomerAccountList(): Observable<Account[]> {
    console.log("calling getCustomerAccountList")
    return this.httpClient.get<Account[]>(this.baseURL);
  }

  addCustomerAccount(account: Account): Observable<Object> {
    return this.httpClient.post(this.baseURL, account);
  }

  getAccountById(accountId: number): Observable<Account> {
    return this.httpClient.get<Account>(this.baseURL + '/' + accountId);
  }

  updateAccountById(accountId: number, account: Account): Observable<Object> {
    return this.httpClient.put(this.baseURL + '/' + accountId, account);
  }

  deleteAccount(accountId: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL + '/' + accountId);
  }

}
