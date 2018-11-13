import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IContasMae } from 'src/app/interfaces/icontas-mae';
import { ITotais } from 'src/app/interfaces/iTotais';
import { totais } from 'src/app/models/totais.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-panel-dashboard-contas-mae',
  templateUrl: './panel-dashboard-contas-mae.component.html',
  styleUrls: ['./panel-dashboard-contas-mae.component.css']
})
export class PanelDashboardContasMaeComponent implements OnInit {
@Input() volumeMensal;

public contasMae: IContasMae[];
public totais: ITotais[];
public labels: string[] = [];
public valores: string[] = [];

Faturamento = [];

  constructor( private service : AuthService ) {
   }

  ngOnInit() {
    this.service.getContasMae().subscribe(contasMae => { this.takeInstance(contasMae) });
  }

  getWidth(value) {
    var valor : number;
    valor = Math.trunc(value / 1000);
    return valor > 500 ? 500 : valor;
  }

  takeInstance(result) {
    this.contasMae = result.contasMae;
    this.totais = new Array<ITotais>(); 
    var index = -1;
    this.contasMae.forEach(data => { 
      if (this.totais[0] != undefined) {
        for (let i=0;i<this.totais.length;i++) {
          index = this.totais[i].codProduto === data.codProduto ? i : -1;
        }
      }  
      if (index === -1) {
        const total = new totais(data.codProduto,data.numValVenda);
        this.totais.push(total);
      } else {
        var valor1: string = this.totais[index].numValVenda.toString();
        var valor2: string = data.numValVenda.toString();
        this.totais[index].numValVenda = parseFloat(valor1) + parseFloat(valor2);
      }
    });
    this.totais.forEach(data => {
      this.labels.push(data.codProduto);
      this.valores.push(data.numValVenda.toString());
    });

    this.Faturamento = new Chart('Faturamento',{
      type: 'bar',
      data: {
          labels: this.labels,
          datasets: [{
              label: 'Faturamento',
              data: this.valores,
              backgroundColor: 'rgba(25, 66, 216, 0.44)',
              borderColor: 'rgba(103, 85, 218, 0.498)',
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
    });
  }
}
