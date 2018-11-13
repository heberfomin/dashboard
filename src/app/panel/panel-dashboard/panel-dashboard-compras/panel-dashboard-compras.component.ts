import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList, Directive } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { ICompras } from 'src/app/interfaces/iCompras';
import { CommomService } from 'src/app/services/commom.service';
import { Series } from 'src/app/models/series.models';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-panel-dashboard-compras',
  templateUrl: './panel-dashboard-compras.component.html',
  styleUrls: ['./panel-dashboard-compras.component.css']
})
export class PanelDashboardComprasComponent implements OnInit, AfterViewInit {
  Compras:ICompras[] = [];
  Produtos:any[] = [];
  Grafico = [];
  chart = [];

  constructor(private service: GetDataService, private common : CommomService) { }

  ngOnInit() {
    this.service.getCompras().subscribe(data => { this.takeInstance(data) });
  }

  takeInstance(data) {
    console.log(data);
    var linha:ICompras;
    for (let i = 0; i<data.compras.length;i++) {
      if (this.Produtos.find(x => x === data.compras[i].codProduto) == undefined) {
        this.Produtos.push(data.compras[i].codProduto);
      }
      linha = data.compras[i];
      this.Compras.push(linha);
    }
    for (let item of this.Produtos) {
      var series = [];
      var labels = [];
      let array = this.Compras.filter(arg => arg.codProduto == item.toString());
      array.forEach(element => {
        series.push(this.common.truncateDecimals((parseFloat(element.numQtdTotal.toString())/1000),3));
        labels.push(element.nomeAbrev);
      });
      const dados = new Series(item,null,labels,series);
      this.Grafico.push(dados);
    } 
    var dataset = []; 
    var labels = [];
    for (let i = 0; i<this.Grafico.length; i++) {
      dataset.push({ label: this.Grafico[i].subject,
                      data: this.Grafico[i].values,
                      backgroundColor: this.common.colorPalete[i + 1], 
                      borderColor: this.common.colorPalete[54 - i],  
                      strokeColor : "rgba(1,1,1,0.5)",
                      borderWidth: 1 });
       labels = this.Grafico[i].labels;                      
    }
    this.chart = new Chart('compras',{
      type: 'bar',
      data: {
        labels: labels,
        datasets: dataset
      },
      options: {
        title: {
          display: true,
          text: 'Compras',
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
  
  ngAfterViewInit() {

  }
  setGraph() {

  }

}
