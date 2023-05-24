import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  url = "http://127.0.0.1:8000"
  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }
  )

requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) {}
  login(data):Observable<any>{
    return this.http.post(`${this.url}/login`,data).pipe(map(responce => responce));
  }
  signup(data):Observable<any>{
    return this.http.post(`${this.url}/register`,data).pipe(map(responce => responce));
  }
  logout(): Observable<any> {
    return this.http.post(`${this.url}/logout`, {}).pipe(map(response => response));
  }
  

  getUser(userName): Observable<any>{

    return this.http.get(`${this.url}/auth/user/`).pipe(map(responce => responce));
  }

  getUserProfile(userName): Observable<any>{
    return this.http.get(`${this.url}/auth/profile/${userName}/`, this.requestOptions).pipe(map(responce => responce))
  }
  decodeToken(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}


}
