import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { ICompras } from '../interfaces/iCompras';
import { IEstoque } from '../interfaces/IEstoque';
import { Produtos } from '../models/Produtos.model';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  public dataEstoque:IEstoque[] = [];
  public Produtos:Produtos[] = [];
  public Periodos = [];
  
  constructor(private http: HttpClient, private Auth : AuthService) { }

  getCompras() : Observable<ICompras> {
    if (this.Auth.getUser()) {   
      return this.http.get<ICompras>(`${environment.api_url}/getCompras`); 
    }
  }

  getEstoque() : Observable<IEstoque> {
    if (this.Auth.getUser()) {   
      return this.http.get<IEstoque>(`${environment.api_url}/getEstoque`); 
    }
  }
  getDataEstoque() {
    if (this.Auth.getUser()) {   
      this.getEstoque().subscribe(data => { this.takeInstance(data) });
    }
  }
  takeInstance(data) {
    for ( let i = 0; i<data.estoque.length; i++) {
        if (this.Produtos.find(x => x.codProduto === data.estoque[i].codProduto) == undefined) {
          const codigo = new Produtos(data.estoque[i].codProduto)
          this.Produtos.push(codigo);
        }
      this.dataEstoque.push(data.estoque[i]);
    }
    var datas = [];
    this.dataEstoque.forEach(meses => {
      this.Periodos = meses.desMesAno;
    });
  }





}
