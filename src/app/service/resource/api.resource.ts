import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrdResponseBody } from '../../types/response';
import { LoginResult } from '../../types/loginresult';
import { Login } from '../../types/login';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // post(endpoint: string): Observable<PrdResponseBody<LoginResult>> {
  //   // this.httpClient.get('dddd', {headers: this.headers}).pipe(map((response: any) => console.log(response.json())));
  //   const vazgen = this.httpClient.post<PrdResponseBody<LoginResult>>(endpoint, this.defaultAccount(), { headers: this.headers });
  //   return vazgen;
  // }

  // downloadImage(url: string): Observable<any> {
  //   return this.httpClient.get<any>(url, { headers: this.headers });
  // }

  // constructor(
  //   private httpClient: HttpClient
  // ) { }
}
