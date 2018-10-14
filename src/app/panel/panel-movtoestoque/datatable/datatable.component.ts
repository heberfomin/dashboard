import { Component, OnInit, Input } from '@angular/core';
import { MovtoEstoque } from '../../../interfaces/MovtoEstoque.model';
import { Transacoes } from '../../../interfaces/Transacoes.model';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input() MovtoEstoque : MovtoEstoque[];
  @Input() ArrayTransacoes : Transacoes[];

  constructor() { }

  ngOnInit() {
  }

  getTransacao(codigo) {
    var result = '';
    if (codigo == undefined || codigo == null) {
      return '';
    }
    if (codigo && codigo > 0) {
      var result = this.ArrayTransacoes.find(item => item.codTransacao != undefined) ?
                   this.ArrayTransacoes.find(item => item.codTransacao == codigo).desTransacao : '';
    }
    return  (result) ? result : codigo;  
  }

}
