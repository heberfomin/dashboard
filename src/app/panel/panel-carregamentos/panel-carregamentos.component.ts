import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { PanelService } from '../panel.service';
import { MdlDatePickerModule, MdlDatePickerService } from '@angular-mdl/datepicker';
import * as moment from 'moment';
import { Carregamentos } from '../../interfaces/Carregamentos.model';


@Component({
  selector: 'app-panel-carregamentos',
  templateUrl: './panel-carregamentos.component.html',
  styleUrls: ['./panel-carregamentos.component.css']
})
export class PanelCarregamentosComponent implements OnInit {
  public funcao = 'Carregamentos';
  public produtos;
  public codProduto;
  public dateFrom;
  public dateTo;
  public Carregamentos: Carregamentos[] = [];

  constructor(private auth: AuthService, private panelService: PanelService, private datePickerModule: MdlDatePickerModule, private datePicker: MdlDatePickerService) { }

  ngOnInit() {
    this.codProduto = 'todos';
    var today = new Date();
    let dd = today.getDate().toString();
    let mm = (today.getMonth()+1).toString(); //January is 0!
    var yyyy = today.getFullYear().toString();
    if (dd<'10') {
       dd = '0'+dd
    } 
    if (mm<'10') {
       mm = '0'+mm
    } 
    var hoje = dd + '/' + mm + '/' + yyyy;
    var primeiroDia = '01' + '/' + mm + '/' + yyyy;
    this.dateFrom = moment(primeiroDia,"DD/MM/YYYY");
    this.dateTo = moment(hoje,"DD/MM/YYYY");
    this.getProdutos();
    this.onProcessing();
  
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
    this.Carregamentos = [];
    this.Carregamentos = this.auth.postReqCarregamentos(this.codProduto, this.dateFrom.format('YYYY-MM-DD'), this.dateTo.format('YYYY-MM-DD')); 
  }

}
