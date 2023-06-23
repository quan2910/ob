import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
const API = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //Authorization: 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) {
  }
  getComments(): Observable<any>{
    return this.http.get<any>(API +`/students`, this.httpOptions)
  }
}
