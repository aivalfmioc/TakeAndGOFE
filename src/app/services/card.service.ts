import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  user : User = new User();
  constructor(private http: HttpClient) { }

  addCard(item :Partial<{ code: string | null; cvv: number | null; month: number | null; year: number | null;}>): Observable<Object>{
    this.user = JSON.parse(localStorage.getItem('user')!);
    return this.http.post("http://localhost:8080/api/addCard/"+this.user.id,item);
  }
}
