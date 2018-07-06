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
    const token1 = 'D203836683D9A79C8F116AC64E2C1538654EC717E2F63502D0E9031DDB0';
    const token2 = 'FACE046012FC5A5F290BB1E42F7B7F4A8AC35BB0927392515B6FA5AB53ECA045AF37A';

    return {
      accessToken: token1.concat(token2),
      providerUserId: 'aram.bekverdyan@gmail.com',
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
