import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }
  getShops(): Observable<any> {
    let url = "http://localhost:8080/api/getShops";
    return this.http.get<any>(url);
  }
}
