import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  user : User = new User();
  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    this.user = JSON.parse(localStorage.getItem('user')!);
    let url = "http://localhost:8080/api/getItems/"+this.user.id;
    return this.http.get<any>(url);
  }
  getCards(): Observable<any> {
    this.user = JSON.parse(localStorage.getItem('user')!);
    let url = "http://localhost:8080/api/getCards/"+this.user.id;
    return this.http.get<any>(url);
  }

  deleteItem(id: number): Observable<any> {
    let url = "http://localhost:8080/api/deleteItem/"+id
    return this.http.delete<any>(url);
  }
  getTotal(): Observable<any> {
    this.user = JSON.parse(localStorage.getItem('user')!);
    let url = "http://localhost:8080/api/getPrice/"+this.user.id;
    return this.http.get<any>(url);
  }
  addItem(item :Partial<{ barcode: string | null; userID: number | null; shopID: number | null; }>): Observable<Object>{
    return this.http.post("http://localhost:8080/api/addToCart",item);
  }
}
