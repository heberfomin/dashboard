import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-panel-dashboard-estoque',
  templateUrl: './panel-dashboard-estoque.component.html',
  styleUrls: ['./panel-dashboard-estoque.component.css']
})
export class PanelDashboardEstoqueComponent implements OnInit {
  @Input() Produtos;
  @Input() dataEstoque;
  @Input() Periodos;
  periodos = [];

  constructor() { }

  ngOnInit() {
  }
  getShift(tipo,item) {
    var classe = "";
    if (tipo == 'titulo') {
      if (item == "1" || item == "11") {
        classe = 'no-shift' 
      } else if (item == "6" || item == "10" ) {
        classe = 'shift-2' 
      } else {
        classe = 'shift-4';   
      }
    } else {
      if (item == "1" || item == "11") {
        classe = 'saldos' 
      } else if (item == "6" || item == "10" ) {
        classe = 'subtotal' 
      } else {
        classe = 'valor';   
      }
    }
    return classe;
  }
}
