import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { DaysCalculation } from 'src/app/models/daysCalculation.model';
import { TodaysVolume } from 'src/app/models/todaysVolume.model';
import { MonthVolume } from 'src/app/models/monthVolume.model';
import { IContasMae } from 'src/app/interfaces/icontas-mae';



@Injectable()
export class AuthService {
  public diasCalculo  : DaysCalculation;
  public volumeHoje   : TodaysVolume[] = [];
  public volumeMensal : MonthVolume[] = [];
  public totalDia : number = 0;
  public totalMes : number = 0;
 
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
  getVolumes(): any {
    if (this.getUser()) {   
      this.diasCalculo = new DaysCalculation; 
      this.http.post<any>(`${environment.api_url}/getVolumes`,
      '')
      .subscribe(rest => { 
        this.diasCalculo = rest.resultado;
        for (let i = 0; i<rest.todaysVolume.length;i++) {
          var volume : TodaysVolume;
          volume = rest.todaysVolume[i];
          this.volumeHoje.push(volume);
          this.totalDia = this.totalDia + parseFloat(rest.todaysVolume[i].quantidade);
        }
        for (let i = 0; i<rest.monthVolume.length;i++) {
          var volume : MonthVolume;
          volume = rest.monthVolume[i];
          this.volumeMensal.push(volume);
          this.totalMes = this.totalMes + parseFloat(rest.monthVolume[i].quantidade);
        }
      })
    }
  } 

  getContasMae() : Observable<IContasMae[]> {
    if (this.getUser()) {   
      return this.http.post<IContasMae[]>(`${environment.api_url}/getContasMae`,''); 
    }
  }

  getPeriodosMoveis() : Observable<any> {
    if (this.getUser()) {   
      return this.http.get<any>(`${environment.api_url}/getPeriodosMoveis`); 
    }
  }

} 
