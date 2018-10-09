import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  login(credentials: {username: string, password: string}): Observable<boolean> {
    return this.http.post<any>(`${environment.api_url}/auth/login`, credentials)
    .do(data => {
      localStorage.setItem('token',data.token);
      localStorage.setItem('user',btoa(JSON.stringify(data.user)));
    });
  }

  logout(): void {
    this.http.get(`${environment.api_url}/auth/logout`).subscribe(resp => {
        localStorage.clear();
        window.sessionStorage.clear();     
        this.router.navigate(['']);
    })
  }
 
  getUser(): User {
    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
  }

  setUser(): Promise<boolean> {
    return this.http.get<any>(`${environment.api_url}/auth/me`).toPromise().then(data => {
      if(data.user) {
        localStorage.setItem('user',btoa(JSON.stringify(data.user)));
        return true;
      }
      return false;
    })
  }

  getSaldos():any {
    return this.http.get<any>(`${environment.api_url}/getSaldoTanques`);
  }  

  getSaldoVeiculos():any {  
    return this.http.get<any>(`${environment.api_url}/getSaldoVeiculos`);
  }  

  getTotaisSaldo(): any {
    return this.http.get<any>(`${environment.api_url}/getSaldoBase`);
  }

  getProdutos():any {
    return this.http.get<any>(`${environment.api_url}/getProdutos`);
    } 

  postReqMovtoEstoque(codProduto: any, dateFrom, dateTo):any {
      var json = JSON.stringify({codProduto: codProduto, dateFrom: dateFrom, dateTo: dateTo});
      var params = 'json=' + json;
      var cabe = new HttpHeaders();
      cabe.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post(`${environment.api_url}/getMovtoEstoque`,params, { headers : cabe })
      .subscribe((rest : any) => { console.log(rest) });
  }  
} 
