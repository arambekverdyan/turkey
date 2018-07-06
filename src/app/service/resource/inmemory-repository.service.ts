import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { PrdResponseBody } from '../../types/response';
import { LoginResult } from '../../types/loginresult';
import { Login } from '../../types/login';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryRepository {

  loginResult: Observable<PrdResponseBody<LoginResult>>;

  private defaultAccount(): Login {

    return {
      accessToken: 'token',
      providerUserId: 'userId',
      clientFingerprint: 'androidX',
      loginProvider: 'NATIVE'
    };
  }

  accessToken(): string {
    let accessToken = '';
    this.loginResult.subscribe(data => accessToken = data.body.accessToken);
    return accessToken;
  }

  private refreshToken() {
    let refreshToken = '';
    this.loginResult.subscribe(data => refreshToken = data.body.refreshToken);
    return refreshToken;
  }

  userId(): string {
    let userId = '';
    this.loginResult.subscribe(data => userId = data.body.userId);
    return userId;
  }

  constructor(
    private tokenService: TokenService
  ) {
    this.loginResult = this.tokenService.obtain(this.defaultAccount());

    interval(40 * 60).subscribe(() => {
      this.loginResult = this.tokenService.refresh(this.refreshToken());
    });
  }
}
