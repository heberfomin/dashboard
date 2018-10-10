import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../auth/services/auth.service';
import { PanelService } from '../panel.service';
import { MdlDatePickerModule, MdlDatePickerService } from '@angular-mdl/datepicker';
import * as moment from 'moment';
import { MovtoEstoque } from '../../interfaces/MovtoEstoque.model';

@Component({
  selector: 'app-panel-movtoestoque',
  templateUrl: './panel-movtoestoque.component.html',
  styleUrls: ['./panel-movtoestoque.component.css']
})
export class PanelMovtoestoqueComponent implements OnInit {
  public codProduto: any;
  public produtos;
  public dateFrom: any;
  public dateTo: any;
  public MovtoEstoque : MovtoEstoque[] = [];

  constructor(private auth: AuthService, private panelService: PanelService, private datePickerModule: MdlDatePickerModule, private datePicker: MdlDatePickerService) { 
    moment.locale('pt-br');
  }

  ngOnInit() {
    return(this.auth.getProdutos().subscribe(resp => { 
      this.produtos  = this.panelService.parsecodProdutos(resp.produtos);
      //console.log(this.produtos);
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
    this.MovtoEstoque = this.auth.postReqMovtoEstoque(this.codProduto, this.dateFrom.format('YYYY-MM-DD'), this.dateTo.format('YYYY-MM-DD')); 
  }

}
