import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../../types/login';
import { LoginResult } from '../../types/loginresult';
import { PrdResponseBody } from '../../types/response';
import { InMemoryRepository } from './inmemory-repository.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private endpoint = 'http://api.praddicts.com/v1';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  obtain(login: Login): Observable<PrdResponseBody<LoginResult>> {
    return this.httpClient.post<PrdResponseBody<LoginResult>>(this.endpoint.concat('/token'), login, { headers: this.headers });
  }

  refresh(refreshToken: string): Observable<PrdResponseBody<LoginResult>> {
    return this.httpClient.patch<PrdResponseBody<LoginResult>>(this.endpoint.concat('/token'), refreshToken, { headers: this.headers });
  }

  getAccessToken(): string {
    return this.inMemoryRepository.accessToken();
  }

  getUserId(): string {
    return this.inMemoryRepository.userId();
  }

  constructor(
    private httpClient: HttpClient,
    private inMemoryRepository: InMemoryRepository
  ) { }
}
