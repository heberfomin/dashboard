import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { MdlDatePickerModule, MdlDatePickerService } from '@angular-mdl/datepicker';
import * as moment from 'moment';

import { Entregas } from 'src/app/interfaces/Entregas.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-panel-entregas',
  templateUrl: './panel-entregas.component.html',
  styleUrls: ['./panel-entregas.component.css']
})
export class PanelEntregasComponent implements OnInit {
  public funcao = 'Entregas';
  public codPlaca;
  public veiculos;
  public dateFrom: any;
  public dateTo: any;
  public entregas: Entregas[] = [];

  constructor(private auth: AuthService, private panelService: PanelService, 
              private datePickerModule: MdlDatePickerModule, 
              private datePicker: MdlDatePickerService) { }

  public getVeiculos() {
    return(this.auth.getVeiculos('3').subscribe(resp => { 
      this.veiculos  = this.panelService.parsecodPlaca(resp.veiculos);
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

  ngOnInit() {
    this.codPlaca = 'todos';
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
    this.getVeiculos();
    this.onProcessing();    
  }

  onProcessing() {
    this.entregas = [];
    this.entregas = this.auth.postReqEntregas(this.codPlaca, this.dateFrom.format('YYYY-MM-DD'), this.dateTo.format('YYYY-MM-DD')); 
  }

}
