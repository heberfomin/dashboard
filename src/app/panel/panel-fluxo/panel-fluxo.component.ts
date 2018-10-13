import { Component, OnInit } from '@angular/core';
import { MdlDatePickerService, MdlDatePickerModule } from '@angular-mdl/datepicker';
import * as moment from 'moment';

import { PanelService } from '../panel.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Fluxo } from 'src/app/interfaces/Fluxo.model';

@Component({
  selector: 'app-panel-fluxo',
  templateUrl: './panel-fluxo.component.html',
  styleUrls: ['./panel-fluxo.component.css']
})
export class PanelFluxoComponent implements OnInit {
  public funcao = 'Fluxo';
  public veiculos;
  public dateFrom: any;
  public dateTo: any;
  public fluxo: Fluxo[] = [];

  constructor(private auth: AuthService, 
              private panelService: PanelService, 
              private datePickerModule: MdlDatePickerModule, 
              private datePicker: MdlDatePickerService) { }

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

  ngOnInit() {
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
    this.onProcessing();    
  }

  onProcessing() {
    this.fluxo = [];
    this.fluxo = this.auth.postReqFluxo(this.dateFrom.format('YYYY-MM-DD'), this.dateTo.format('YYYY-MM-DD')); 
  }

}
