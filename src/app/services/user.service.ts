import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { AppConst } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    let url = AppConst.endpoint+"/getUsers";
    return this.http.get<any>(url);
  }

  addUser(user :Partial<{ firstname: string | null; lastname: string | null; email: string | null; password: string | null; }>): Observable<Object>{
    return this.http.post(AppConst.endpoint+"/addUser",user);
  }

  logUser(user :Partial<{ email: string | null; password: string | null; }>): Observable<Object>{
    console.log(user);
    return this.http.post(AppConst.endpoint+"/loginUser",user);
  }
  updateUser(user :Partial<{id:number|null; firstname: string | null; lastname: string | null; email: string | null;}>): Observable<Object>{
    return this.http.put(AppConst.endpoint+"/updateUserr",user);
  }
  changePassword(user :Partial<{ id:number|null; oldPassword: string | null; newPassword: string | null;}>): Observable<Object>{
    return this.http.put(AppConst.endpoint+"/changePassword",user);
  }
}
