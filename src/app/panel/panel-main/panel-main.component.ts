import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { SaldoData } from '../../interfaces/saldos.model';

@Component({
  selector: 'app-panel-main',
  templateUrl: './panel-main.component.html',
  styleUrls: ['./panel-main.component.css']
})
export class PanelMainComponent implements OnInit {
  private saldos : SaldoData[] = [];

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.getTanks();
  }

  getTanks() {
    console.log(this.service.getSaldos().subscribe(resp => { 
      this.parseData(resp.balance);
      }
    ));

  }
  parseData(jsonData) {
    for (let i = 0; i < jsonData.length; i++) {
      const data = new SaldoData(jsonData[i].numTanque,jsonData[i].codProduto,jsonData[i].numCapacidade,jsonData[i].numQuantidadeAtual,jsonData[i].numTotal);
      this.saldos.push(data);
    }
    console.log(this.saldos);
  }



}
