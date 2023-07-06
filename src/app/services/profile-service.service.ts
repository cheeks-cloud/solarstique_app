import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  url = "http://localhost:8000"
  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }
  )

  requestOptions = { headers: this.headers };


constructor(private http: HttpClient) { }

getProfile():Observable<any>{
  return this.http.get(`${this.url}/customers/view/` + JSON.parse(localStorage.getItem('username')))
}

}
