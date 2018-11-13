import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PeriodosMoveis } from 'src/app/models/periodosMoveis.model';
import { Chart } from 'chart.js';
import { CommomService } from 'src/app/services/commom.service';

@Component({
  selector: 'app-panel-dashboard-periodos-moveis',
  templateUrl: './panel-dashboard-periodos-moveis.component.html',
  styleUrls: ['./panel-dashboard-periodos-moveis.component.css']
})
export class PanelDashboardPeriodosMoveisComponent implements OnInit {
  PeriodosMoveisGraph = [];
  constructor( private service : AuthService, private common : CommomService ) { }

  ngOnInit() { 
    this.service.getPeriodosMoveis().subscribe(data => { this.takeInstance(data.periodosMoveis) });
  }

  takeInstance(data) {
    var series = [];
    var periodos;
    for (let i=0;i<data.length;i++) {
      periodos = data[0].periodos;
      const dados = new PeriodosMoveis(data[i].codProduto,data[i].quantidades[i]);
      series.push(dados);
    }
    periodos  = periodos[0];
    let rb = 233; 
    let gb = 14;
    let bb = 50;
    var dataset = []
    series.forEach(item => { 
      let serie = item.volumes.map(i => this.common.truncateDecimals((parseFloat(i)/1000),3));
      let backgroundColor = "rgba(" + <string><any>rb + "," + <string><any>gb + "," + <string><any>bb + ",0.5)"; 
      let borderColor = "rgba(" + <string><any>bb + ',' + <string><any>gb + ',' + <string><any>rb + ",0.5)";
      rb = rb - 43;
      gb = gb + 30;
      bb = bb + 85;
      dataset.push( { label: item.codProduto,
                      data: serie,
                      backgroundColor: backgroundColor, 
                      borderColor: borderColor,  
                      strokeColor : "rgba(1,1,1,0.5)",
                      borderWidth: 1 });
    });
    this.PeriodosMoveisGraph = new Chart('PeriodosMoveisGraph',{
      type: 'bar',
      data: {
        labels: periodos,
        datasets: dataset
      },
      options: {
        title: {
          display: true,
          text: 'Volume de Vendas - Períodos Móveis',
          fontSize: 18
        },
        legend: {
          display: true,
          position: "bottom",
        },
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
