import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  tokenName = 'ItReportToken';
  token = sessionStorage.getItem(this.tokenName);
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    @Inject('API_URL') private url: any,
    private http: HttpClient,
    private route: Router
  ) { }

  login(username: any, password: any) {
    return this.http.post(`${this.url}/itreport/login`, { username, password })
      .toPromise()
      .then(result => result)
      .catch(error => error);
  }

  async decodeToken(token: any = '') {
    if (!token) {
      token = await this.getToken();
    }
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return this.jwtHelper.decodeToken(token);
    } else {
      this.route.navigate(['/login']);
    }
  }

  getToken() {
    return sessionStorage.getItem(this.tokenName) || localStorage.getItem(this.tokenName) || null;
  }

  logout() {
    sessionStorage.removeItem(this.tokenName);
    localStorage.removeItem(this.tokenName);
    this.route.navigate(['/login']);
  }

  async getHttpHeaders(token: any = '') {
    if (!token) {
      token = await this.getToken();
    }
    const key = localStorage.getItem('request_local_api') || 'none';
    const httpHeaders: HttpHeaders = new HttpHeaders()
      .set('authorization', `Bearer ${token}`)
      .set('localkey', key);
    return httpHeaders;
  }

  isLoggedIn() {
    return sessionStorage.getItem(this.tokenName) != null
  }

}
