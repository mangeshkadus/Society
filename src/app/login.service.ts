import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public apiurl : string =  'http://localhost:8080/login';
  constructor(private http: HttpClient) { }
  login(payload: any): Observable<any> {
    return this.http.post(this.apiurl, payload);
  }
}
