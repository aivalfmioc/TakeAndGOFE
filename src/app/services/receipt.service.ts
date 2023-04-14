import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConst } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http: HttpClient) { }
  getItems(id : number): Observable<any> {
    let url = AppConst.endpoint+"/getItemsByCart/"+id;
    return this.http.get<any>(url);
  }
  getReceipt(id: number): Observable<any> {
    let url = AppConst.endpoint+"/getReceipt/"+id;
    return this.http.get<any>(url);
  }
  getReceipts(id: number): Observable<any> {
    let url = AppConst.endpoint+"/getReceipts/"+id;
    return this.http.get<any>(url);
  }
}
