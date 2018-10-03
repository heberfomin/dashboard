import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { SaldoData } from '../../interfaces/saldos.model';
import { SaldoVeiculoData } from '../../interfaces/saldoVeiculos.model';
import { SaldoTotalData } from '../../interfaces/saldoTotal.model';
import { SaldosPorProdutoData } from '../../interfaces/saldosPorProduto.model';
import { ProdutoData } from '../../interfaces/produtos.model';
import { MdlDialogService } from '@angular-mdl/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-panel-main',
  templateUrl: './panel-main.component.html',
  styleUrls: ['./panel-main.component.css']
})

export class PanelMainComponent implements OnInit {
  public saldos : SaldoData[] = [];
  public saldosVeiculos : SaldoVeiculoData[] = [];
  public saldosDet : SaldosPorProdutoData[] = [];
  public saldosTotal : SaldoTotalData[] = [];
  public produtos : ProdutoData[] = [];

  constructor(private service: AuthService, 
              private dialogService: MdlDialogService,
              private panelService: PanelService) { }

  ngOnInit() {
    this.getTanks();
    this.getSaldoVeiculos();
    this.apuraTotais();
  }

  getTanks() {
    return(this.service.getSaldos().subscribe(resp => { 
      this.saldos = this.panelService.parseData(resp.balance);
      }
    ));
  }

  getSaldoVeiculos() {
    return(this.service.getSaldoVeiculos().subscribe(resp => { 
      this.saldosVeiculos = this.panelService.parseDataVeiculos(resp);
    }));
  }

  apuraTotais() {
    return(this.service.getTotaisSaldo().subscribe(resp => { 
      this.produtos = this.panelService.parseProdutos(resp.produtos);
      this.saldosDet = this.panelService.parseSaldoDet(resp.saldosDet,this.produtos);
      this.saldosTotal = this.panelService.parseSaldos(resp.saldos);
      }
    ));  
  }
}
