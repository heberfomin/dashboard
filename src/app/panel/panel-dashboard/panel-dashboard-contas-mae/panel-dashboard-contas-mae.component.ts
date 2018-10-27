import { Component, OnInit, Input,ViewChild } from '@angular/core';

@Component({
  selector: 'app-panel-dashboard-contas-mae',
  templateUrl: './panel-dashboard-contas-mae.component.html',
  styleUrls: ['./panel-dashboard-contas-mae.component.css']
})
export class PanelDashboardContasMaeComponent implements OnInit {
@Input() contasMae;
@Input() volumeMensal;
@Input() totais;

//labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//data: [65, 59, 80, 81, 56, 55, 40],

type = 'bar';
  data = {
    labels: this.totais,
    datasets: [
      {
        label: 'My First dataset',
        data: this.totais,
        backgroundColor: '#FF6384'
      },
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          stacked: true
        }
      ],
      yAxes: [
        {
          stacked: true
        }
      ]
    },

    // Container for zoom options
    zoom: {
      // Boolean to enable zooming
      enabled: true,

      // Zooming directions. Remove the appropriate direction to disable 
      // Eg. 'y' would only allow zooming in the y direction
      mode: 'xy',
    }
  };

  constructor() {
   }

  ngOnInit() {
    
  }

  getWidth(value) {
    var valor : number;
    valor = Math.trunc(value / 1000);
    return valor > 500 ? 500 : valor;
  }

  getTotais() {
    console.log(this.totais);
  }
}
