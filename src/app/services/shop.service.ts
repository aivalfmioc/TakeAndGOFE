import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConst } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }
  getShops(): Observable<any> {
    let url = AppConst.endpoint+"/getShops";
    return this.http.get<any>(url);
  }
}
