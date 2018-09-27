import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { SaldoData } from '../../interfaces/saldos.model';
import { SaldoVeiculoData } from '../../interfaces/saldoVeiculos.model';
import { SaldoTotalData } from '../../interfaces/saldoTotal.model';
import { SaldosPorProdutoData } from '../../interfaces/saldosPorProduto.model';
import { ProdutoData } from '../../interfaces/produtos.model';

@Component({
  selector: 'app-panel-main',
  templateUrl: './panel-main.component.html',
  styleUrls: ['./panel-main.component.css']
})
export class PanelMainComponent implements OnInit {
  public saldos : SaldoData[] = [];
  public saldosVeiculos : SaldoVeiculoData[] = [];
  public saldosDet : SaldosPorProdutoData[] = [];
  public saldosTotal : SaldoTotalData[] = [];
  public produtos : ProdutoData[] = [];

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.getTanks();
    this.getSaldoVeiculos();
    this.apuraTotais();
  }

  getTanks() {
    return(this.service.getSaldos().subscribe(resp => { 
      this.parseData(resp.balance);
      }
    ));

  }
  parseData(jsonData) {
    for (let i = 0; i < jsonData.length; i++) {
      const data = new SaldoData(jsonData[i].numTanque,jsonData[i].codProduto,jsonData[i].numCapacidade,jsonData[i].numQuantidadeAtual,jsonData[i].numTotal);
      this.saldos.push(data);
    }
  }

  getSaldoVeiculos() {
    return(this.service.getSaldoVeiculos().subscribe(resp => { 
      this.parseDataVeiculos(resp);
      //console.log(resp);
    }));
  }

  parseDataVeiculos(jsonData) {
    for (let i = 0; i < jsonData.length; i++) {
      const data = new SaldoVeiculoData(jsonData[i].codPlaca,jsonData[i].indMultCompart,jsonData[i].indTamanho,
        jsonData[i].numCapacidadeL,jsonData[i].numCapacidadeM3,jsonData[i].numCompart,jsonData[i].numVolCompart1,
        jsonData[i].numVolCompart2,jsonData[i].numVolCompart3,jsonData[i].numOcupado, jsonData[i].percentage, 
        jsonData[i].saldos);
      this.saldosVeiculos.push(data);
    }
  }

  apuraTotais() {
    return(this.service.getTotaisSaldo().subscribe(resp => { 
      console.log(resp);
      this.parseProdutos(resp.produtos);
      this.parseSaldoDet(resp.saldosDet);
      this.parseSaldos(resp.saldos);
      }
    ));  
  }
  parseProdutos(jsonData) {
    for (let i = 0;i<jsonData.length;i++) {
      const data = new ProdutoData(jsonData[i].produto);
      this.produtos.push(data);
      //console.log(this.produtos);
    }
  }
  parseSaldoDet(jsonData) {
    for (let i = 0; i < jsonData.length; i++) {
      const data = new SaldosPorProdutoData( jsonData[i].local, jsonData[i].produtos, this.produtos);
      this.saldosDet.push(data);
    }
    console.log(this.saldosDet);
  }

  parseSaldos(jsonData) {
    for (let i = 0; i < jsonData.length; i++) {
      const data = new SaldoTotalData(jsonData[i].codProduto,jsonData[i].numQuantidade);
      this.saldosTotal.push(data);
    }
  }

}
