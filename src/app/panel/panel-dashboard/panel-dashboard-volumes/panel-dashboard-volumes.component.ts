import { Component, Input, OnInit } from '@angular/core';
import { TodaysVolume } from 'src/app/models/todaysVolume.model';

@Component({
  selector: 'app-panel-dashboard-volumes',
  templateUrl: './panel-dashboard-volumes.component.html',
  styleUrls: ['./panel-dashboard-volumes.component.css']
})
export class PanelDashboardVolumesComponent implements OnInit {
  @Input() diasCalculo;
  @Input() volumeHoje;
  @Input() volumeMensal;
  @Input() totalDia;
  @Input() totalMes;
  totalForecast = 0;
  valor = 180;

  constructor() { 
  }

  ngOnInit() {
  }

  getHeight(value) {
    var valor : number;
    valor = Math.trunc(value / 100);
    return valor > 500 ? 500 : valor;
  }

  getHeight1000(value) {
    var valor : number;
    valor = Math.trunc(value / 1000);
    return valor > 500 ? 500 : valor;
  }

  getForecast(value) {
    return ( value / this.diasCalculo.DiasUteisHoje ) * this.diasCalculo.DiasUteisFimMes
  }
}
