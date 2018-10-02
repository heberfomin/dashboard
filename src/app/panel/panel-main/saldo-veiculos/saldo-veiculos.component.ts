import { Component, OnInit, Input } from '@angular/core';
import { SaldosPorProdutoData } from '../../../interfaces/saldosPorProduto.model';
import { ProdutoData } from '../../../interfaces/produtos.model';
import { SaldoTotalData } from '../../../interfaces/saldoTotal.model';

@Component({
  selector: 'app-saldo-veiculos',
  templateUrl: './saldo-veiculos.component.html',
  styleUrls: ['./saldo-veiculos.component.css']
})
export class SaldoVeiculosComponent implements OnInit {
  @Input() saldosDet : SaldosPorProdutoData;
  @Input() produtos : ProdutoData;
  @Input() saldosTotal : SaldoTotalData;
  constructor() { }

  ngOnInit() {

  }

  onDialogShow(dialogRef) {
    
  }

  onDialogHide() {

  }
}