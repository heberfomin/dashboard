import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { User } from '../../interfaces/user.model';
import { MovtoEstoque } from '../../interfaces/MovtoEstoque.model';
import { Carregamentos } from '../../interfaces/Carregamentos.model';
import { Viagens } from '../../interfaces/Viagens.model';
import { Entregas } from 'src/app/interfaces/Entregas.model';
import { Fluxo } from 'src/app/interfaces/Fluxo.model';

@Injectable()
export class AuthService {
  public movimento : MovtoEstoque[] = [];
  public carregamentos : Carregamentos[] = [];
  public viagens : Viagens[] = [];
  public entregas : Entregas[] = [];
  public fluxo : Fluxo[] = [];
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
    if (this.getUser()) {
        return this.http.get<any>(`${environment.api_url}/getSaldoTanques`);
    }
  }  

  getSaldoVeiculos():any {  
    if (this.getUser()) {
        return this.http.get<any>(`${environment.api_url}/getSaldoVeiculos`);
    }
  }  

  getTotaisSaldo(): any {
    if (this.getUser()) {
       return this.http.get<any>(`${environment.api_url}/getSaldoBase`);
    }
  }

  getProdutos():any {
    if (this.getUser()) {
      return this.http.get<any>(`${environment.api_url}/getProdutos`);
    }
  } 

  getTransacoes():any {
    if (this.getUser()) {
      return this.http.get<any>(`${environment.api_url}/getTransacoes`);
    }
  } 

  getVeiculos(funcao : string):any {
    if (this.getUser()) {
      return this.http.get<any>(`${environment.api_url}/getVeiculos/${funcao}`);
    }
  } 

  postReqMovtoEstoque(codProduto: any, dateFrom, dateTo): any {
    var movto : MovtoEstoque;
    this.movimento = [];
    if (this.getUser()) {    
      this.http.post<any>(`${environment.api_url}/getMovtoEstoque`,
      JSON.stringify ({json:{ codProduto: codProduto, dateFrom: dateFrom, dateTo: dateTo }}),
      { headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .subscribe(rest => { 
        for(let i = 0; i<rest.data.length; i++) {
          movto = new MovtoEstoque;
          movto = rest.data[i];
          this.movimento.push(movto);
        }
      });
    }
    return this.movimento;
  } 

  postReqCarregamentos(codProduto: any, dateFrom, dateTo): any {
    var Carregamento : Carregamentos;
    this.carregamentos = [];
    if (this.getUser()) {    
      this.http.post<any>(`${environment.api_url}/getCarregamentos`,
      JSON.stringify ({json:{ codProduto: codProduto, dateFrom: dateFrom, dateTo: dateTo }}),
      { headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .subscribe(rest => { 
        for(let i = 0; i<rest.data.length; i++) {
          Carregamento = new Carregamentos;
          Carregamento = rest.data[i];
          this.carregamentos.push(Carregamento);
        }
      });
    }
    return this.carregamentos;
  }   

  postReqViagens(codPlaca: any, dateFrom, dateTo): any {
    var ArrayViagens : Viagens;
    this.viagens = [];
    if (this.getUser()) {    
      this.http.post<any>(`${environment.api_url}/getViagens`,
      JSON.stringify ({json:{ codPlaca: codPlaca, dateFrom: dateFrom, dateTo: dateTo }}),
      { headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .subscribe(rest => { 
        for(let i = 0; i<rest.data.length; i++) {
          ArrayViagens = new Viagens;
          ArrayViagens = rest.data[i];
          this.viagens.push(ArrayViagens);
        }
      });
    }
    return this.viagens;
  } 

  postReqEntregas(codPlaca: any, dateFrom, dateTo): any {
    var ArrayEntregas : Entregas;
    this.entregas = [];
    if (this.getUser()) {    
      this.http.post<any>(`${environment.api_url}/getEntregas`,
      JSON.stringify ({json:{ codPlaca: codPlaca, dateFrom: dateFrom, dateTo: dateTo }}),
      { headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .subscribe(rest => { 
        for(let i = 0; i<rest.data.length; i++) {
          ArrayEntregas = new Entregas;
          ArrayEntregas = rest.data[i];
          this.entregas.push(ArrayEntregas);
        }
      });
    }
    return this.entregas;
  } 
  
  postReqFluxo(dateFrom, dateTo): any {
    var ArrayFluxo : Fluxo; 
    this.fluxo = [];
    if (this.getUser()) {    
      this.http.post<any>(`${environment.api_url}/getFluxo`,
      JSON.stringify ({json:{ dateFrom: dateFrom, dateTo: dateTo }}),
      { headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .subscribe(rest => { 
        for(let i = 0; i<rest.data.length; i++) {
          ArrayFluxo = new Fluxo;
          ArrayFluxo = rest.data[i];
          this.fluxo.push(ArrayFluxo);
        }
      });
    }
    return this.fluxo;
  } 

} 
