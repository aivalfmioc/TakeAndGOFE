import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http: HttpClient) { }
  getItems(id : number): Observable<any> {
    let url = "http://localhost:8080/api/getItemsByCart/"+id;
    return this.http.get<any>(url);
  }
  getReceipt(id: number): Observable<any> {
    let url = "http://localhost:8080/api/getReceipt/"+id;
    return this.http.get<any>(url);
  }
  getReceipts(id: number): Observable<any> {
    let url = "http://localhost:8080/api/getReceipts/"+id;
    return this.http.get<any>(url);
  }
}
