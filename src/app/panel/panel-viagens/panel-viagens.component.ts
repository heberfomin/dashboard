import { Component, OnInit } from '@angular/core';
import { MdlDatePickerModule, MdlDatePickerService } from '@angular-mdl/datepicker';
import * as moment from 'moment';
import { AuthService } from '../../auth/services/auth.service';
import { PanelService } from '../panel.service';
import { Viagens } from '../../interfaces/Viagens.model';


@Component({
  selector: 'app-panel-viagens',
  templateUrl: './panel-viagens.component.html',
  styleUrls: ['./panel-viagens.component.css']
})
export class PanelViagensComponent implements OnInit {
  public funcao = 'Viagens';
  public codPlaca;
  public veiculos;
  public dateFrom: any;
  public dateTo: any;
  public viagens: Viagens[] = [];

  constructor(private auth: AuthService, private panelService: PanelService, private datePickerModule: MdlDatePickerModule, private datePicker: MdlDatePickerService) { }

  public getVeiculos() {
    return(this.auth.getVeiculos().subscribe(resp => { 
      this.veiculos  = this.panelService.parsecodPlaca(resp.veiculos);
      console.log(this.veiculos);
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
    this.viagens = [];
    this.viagens = this.auth.postReqViagens(this.codPlaca, this.dateFrom.format('YYYY-MM-DD'), this.dateTo.format('YYYY-MM-DD')); 
  }

}
