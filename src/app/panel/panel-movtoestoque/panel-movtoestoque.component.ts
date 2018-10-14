import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { PanelService } from '../panel.service';
import { MdlDatePickerModule, MdlDatePickerService } from '@angular-mdl/datepicker';
import * as moment from 'moment';
import { MovtoEstoque } from '../../interfaces/MovtoEstoque.model';
import { Transacoes } from '../../interfaces/Transacoes.model';

@Component({
  selector: 'app-panel-movtoestoque',
  templateUrl: './panel-movtoestoque.component.html',
  styleUrls: ['./panel-movtoestoque.component.css']
})
export class PanelMovtoestoqueComponent implements OnInit {
  public funcao = 'Movimento de Estoque';
  public codProduto: any;
  public produtos;
  public dateFrom: any;
  public dateTo: any;
  public ArrayTransacoes : Transacoes[];
  public MovtoEstoque : MovtoEstoque[] = [];

  constructor(private auth: AuthService, private panelService: PanelService, private datePickerModule: MdlDatePickerModule, private datePicker: MdlDatePickerService) { 
    moment.locale('pt-br');
  }

  ngOnInit() {
    this.codProduto = 'todos';
    var today = new Date();
    let dd = today.getDate().toString();
    let mm = (today.getMonth()+1).toString(); //January is 0!
    var yyyy = today.getFullYear().toString();
    if(dd<'10') {
      dd = '0'+dd
    } 
    if(mm<'10') {
      mm = '0'+mm
    } 
    var hoje = dd + '/' + mm + '/' + yyyy;
    var primeiroDia = '01' + '/' + mm + '/' + yyyy;
    this.dateFrom = moment(primeiroDia,"DD/MM/YYYY");
    this.dateTo = moment(hoje,"DD/MM/YYYY");
    this.getProdutos();
    this.getTransacoes();
    this.onProcessing();
  }

  public getTransacoes() {
    return(this.auth.getTransacoes().subscribe(resp => { 
      this.ArrayTransacoes  = this.panelService.parseTransacoes(resp.transacoes);
//      console.log(this.ArrayTransacoes.find(item => item.codTransacao == 13).desTransacao);
    }
    ));
  }

  public getProdutos() {
    return(this.auth.getProdutos().subscribe(resp => { 
      this.produtos  = this.panelService.parsecodProdutos(resp.produtos);
      }
    ));
  }

  public pickDateFrom($event: MouseEvent) {
    this.datePicker.selectDate(this.dateFrom, {openFrom: $event}).subscribe( (dateFrom: Date) => {
      this.dateFrom = dateFrom ? moment(dateFrom) : null;
    });
  }
  public pickDateTo($event: MouseEvent) {
    this.datePicker.selectDate(this.dateTo, {openFrom: $event}).subscribe( (dateTo: Date) => {
      this.dateTo = dateTo ? moment(dateTo) : null;
    });
  }
  public onProcessing() {
    this.MovtoEstoque = [];
    this.MovtoEstoque = this.auth.postReqMovtoEstoque(this.codProduto, this.dateFrom.format('YYYY-MM-DD'), this.dateTo.format('YYYY-MM-DD')); 
  }

}
