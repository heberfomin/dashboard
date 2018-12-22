import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/services/auth.service';
import { ICompras } from '../interfaces/iCompras';
import { IEstoque } from '../interfaces/IEstoque';
import { Produtos } from '../models/Produtos.model';
import { IContasReceber } from '../interfaces/IContasReceber';
import { aReceber } from '../models/aReceber.model';
import { vencidos } from '../models/vencidos.model';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  public dataEstoque:IEstoque[] = [];
  public Produtos:Produtos[] = [];
  public Periodos = [];
  public CRaVencer001 = [];
  public CRaVencer002 = [];
  public CRVencido001 = [];
  public CRVencido002 = [];
  public crProdutos = [];
  
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

  getContasReceber() : Observable<IContasReceber> {
    if (this.Auth.getUser()) {
      return this.http.get<IContasReceber>(`${environment.api_url}/getContasReceber`);
    }
  }

  getDataCR() {
    if (this.Auth.getUser()) {
      this.getContasReceber().subscribe(data => { this.takeInstanceCR(data) });
    }
  }

  takeInstanceCR(data) {
    //console.log(data);
    for ( let i = 0; i<data.contasReceber.length; i++) {
      if (data.contasReceber[i].desSessao == 'A Receber') {
        const dados = new aReceber(data.contasReceber[i].desEstabel,
                                   data.contasReceber[i].codProduto,
                                   data.contasReceber[i].numFaixaInicial,
                                   data.contasReceber[i].numFaixaFinal,
                                   data.contasReceber[i].numLitros,
                                   data.contasReceber[i].numServicos,
                                   data.contasReceber[i].numFrete,
                                   data.contasReceber[i].numValorHoje,
                                   data.contasReceber[i].numValor5dias,
                                   data.contasReceber[i].numValor10dias,
                                   data.contasReceber[i].numValor20dias,
                                   data.contasReceber[i].numValor30dias,
                                   data.contasReceber[i].numValorMais30);
        if (data.contasReceber[i].desEstabel == '001') {
          this.CRaVencer001.push(dados);
        } else {
          this.CRaVencer002.push(dados);
        }
      } else {
        const dados = new vencidos(data.contasReceber[i].codProduto,
                                   data.contasReceber[i].desGrupo,
                                   data.contasReceber[i].numLitros,
                                   data.contasReceber[i].numServicos,
                                   data.contasReceber[i].numFrete,
                                   data.contasReceber[i].numVencidoAte5,
                                   data.contasReceber[i].numVencido5a9,
                                   data.contasReceber[i].numVencido10a19,
                                   data.contasReceber[i].numVencido20a29,
                                   data.contasReceber[i].numVencido30a59,
                                   data.contasReceber[i].numVencidomais60);
        if (data.contasReceber[i].desEstabel == '001') {
          this.CRVencido001.push(dados);
        } else {
          this.CRVencido002.push(dados); 
        }                                   
      }

    }
    this.CRaVencer001.forEach(item => {
      if (this.crProdutos.find(x => x.codProduto === item.codProduto) == undefined) {
        const codigo = new Produtos(item.codProduto)
        this.crProdutos.push(codigo);
      }
    });
  }

}
