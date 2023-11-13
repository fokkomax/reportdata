import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { LoginService } from '../service/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    @Inject('API_URL') private url: any,
    private http: HttpClient,
  ) { }

  getYear() {
    return this.http.get(`${this.url}/itreport/main/getYear`, {})
      .toPromise()
      .then(result => result)
      .catch(error => error);
  }
  getYearActive() {
    return this.http.get(`${this.url}/itreport/main/getYearActive`, {})
      .toPromise()
      .then(result => result)
      .catch(error => error);
  }

  getYearNotActive() {
    return this.http.get(`${this.url}/itreport/main/getYearNotActive`, {})
      .toPromise()
      .then(result => result)
      .catch(error => error);
  }

  getReport(year: any) {
    return this.http.get(`${this.url}/itreport/main/getReport/${year}`, {})
      .toPromise()
      .then(result => result)
      .catch(error => error);
  }

  getTableHeader(year: any) {
    return this.http.get(`${this.url}/itreport/main/getTableHeader/${year}`, {})
      .toPromise()
      .then(result => result)
      .catch(error => error);
  }
}
