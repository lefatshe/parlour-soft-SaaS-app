import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, mapTo, tap} from 'rxjs/operators';
import {Token} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private  JWT_TOKEN = 'JWT_TOKEN';
  private  REFRESH_TOKEN = 'REFRESH_TOKEN';
  private  loggedUsers: string;
  private  ApiUrl = 'http://www.parloursoftweb.co.za/api/'

  constructor(private http: HttpClient) {
  }

  reFreshToken() {
    return this.http.post<any>(`${this.ApiUrl}/refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }

  login(user: { username: string, passsword: string }): Observable<boolean> {
    return this.http.post<any>(`${this.ApiUrl}/login`, user)
      .pipe(
        tap(token => this.doLoginUser(user.username, token)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        })
      );
  }

  logout() {
    return this.http.post<any>(`${this.ApiUrl}/logout`, { refreshToken : this.getRefreshToken()}).pipe(
        tap(token => this.doLogoutUser()),
        mapTo(true),
        catchError(error => {
          alert(error.error)
          return of(false);
        })
      );
  }
  // doLoginUser
  private doLoginUser(username: string, tokens) {
    this.loggedUsers = username
    this.storeTokens(tokens);
  }
  // doLogoutUser
  private doLogoutUser() {
    this.loggedUsers = null
    this.removeTokens();
  }
  // storeTokens
  private storeTokens(tokens) {
    localStorage.setItems(this.JWT_TOKEN, tokens.jwt)
    localStorage.setItems(this.REFRESH_TOKEN, tokens.refreshToken);
  }
  // removeTokens
  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN)
    localStorage.setItems(this.REFRESH_TOKEN);
  }
}
