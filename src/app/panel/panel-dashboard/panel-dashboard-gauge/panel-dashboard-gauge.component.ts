import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-dashboard-gauge',
  templateUrl: './panel-dashboard-gauge.component.html',
  styleUrls: ['./panel-dashboard-gauge.component.css']
})
export class PanelDashboardGaugeComponent implements OnInit {
  @Input() valor;
  @Input() total;
  @Input() width;
  public color;

  constructor() { }

  ngOnInit() {
    this.color = this.getColor(this.valor,this.total);
  }

  getColor(valor,total) {
    var value = (valor / total) * 100;
    if (value <= 10) {
      return 'red';
    } 
    if ( value > 10 && value <= 60 ) {
      return 'yellow';
    }
    if ( value > 60 ) {
      return 'green';
    }
  }

}
