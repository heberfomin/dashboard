import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { SaldoData } from '../../interfaces/saldos.model';
import { SaldoVeiculoData } from '../../interfaces/saldoVeiculos.model';

@Component({
  selector: 'app-panel-main',
  templateUrl: './panel-main.component.html',
  styleUrls: ['./panel-main.component.css']
})
export class PanelMainComponent implements OnInit {
  private saldos : SaldoData[] = [];
  private saldosVeiculos : SaldoVeiculoData[] = [];

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.getTanks();
    this.getSaldoVeiculos();
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
      this.parseDataVeiculos(resp.trucks);
    }));
  }

  parseDataVeiculos(jsonData) {
    for (let i = 0; i < jsonData.length; i++) {
      const data = new SaldoVeiculoData(jsonData[i].codPlaca,jsonData[i].indMultCompart,jsonData[i].indTamanho,jsonData[i].numCapacidadeL,jsonData[i].numCapacidadeM3,jsonData[i].numCompart,jsonData[i].numVolCompart1,jsonData[i].numVolCompart2,jsonData[i].numVolCompart3);
      this.saldosVeiculos.push(data);
    }
  }



}
