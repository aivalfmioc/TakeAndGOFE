import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    let url = "http://localhost:8080/api/getUsers";
    return this.http.get<any>(url);
  }

  addUser(user :Partial<{ firstname: string | null; lastname: string | null; email: string | null; password: string | null; }>): Observable<Object>{
    return this.http.post("http://localhost:8080/api/addUser",user);
  }

  logUser(user :Partial<{ email: string | null; password: string | null; }>): Observable<Object>{
    return this.http.post("http://localhost:8080/api/loginUser",user);
  }
  updateUser(user :Partial<{id:number|null; firstname: string | null; lastname: string | null; email: string | null;}>): Observable<Object>{
    return this.http.put("http://localhost:8080/api/updateUserr",user);
  }
  changePassword(user :Partial<{ id:number|null; oldPassword: string | null; newPassword: string | null;}>): Observable<Object>{
    return this.http.put("http://localhost:8080/api/changePassword",user);
  }
}
