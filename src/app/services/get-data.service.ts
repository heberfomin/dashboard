import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { ICompras } from '../interfaces/iCompras';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient, private Auth : AuthService) { }

  getCompras() : Observable<ICompras> {
    if (this.Auth.getUser()) {   
      return this.http.get<ICompras>(`${environment.api_url}/getCompras`); 
    }
  }
}
