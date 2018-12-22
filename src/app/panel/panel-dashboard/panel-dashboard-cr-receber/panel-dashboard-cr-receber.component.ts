import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-dashboard-cr-receber',
  templateUrl: './panel-dashboard-cr-receber.component.html',
  styleUrls: ['./panel-dashboard-cr-receber.component.css']
})
export class PanelDashboardCrReceberComponent implements OnInit {
@Input() CRaVencer001;
@Input() CRaVencer002;
@Input() crProdutos;

hoje: number = 0;
ate5dias: number = 0;
ate10dias: number = 0;
ate20dias: number = 0;
ate30dias: number = 0;
atemais30: number = 0;

  constructor() { }

  ngOnInit() {
  }
  sum(col,produto) {
    var total: number = 0;
    this.CRaVencer001.forEach(item => {
      if (item.codProduto == produto) {
        if (col == 1) total = total + parseFloat(item.numValorHoje);
        if (col == 2) total = total + parseFloat(item.numValor5dias);
        if (col == 3) total = total + parseFloat(item.numValor10dias);
        if (col == 4) total = total + parseFloat(item.numValor20dias);
        if (col == 5) total = total + parseFloat(item.numValor30dias);
        if (col == 6) total = total + parseFloat(item.numValorMais30);
      }
    });
    return total;
  }
}
