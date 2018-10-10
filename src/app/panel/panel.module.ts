import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule, MdlDialogModule, MdlDialogService } from '@angular-mdl/core';
import { MdlSelectModule } from '@angular-mdl/select';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from "angular-6-datatable";

import { PanelRoutingModule } from './panel.routing';
import { PanelComponent } from './panel.component';
import { PanelMainComponent } from './panel-main/panel-main.component';
import { PanelSaldosComponent } from './panel-saldos/panel-saldos.component';
import { PanelViagensComponent } from './panel-viagens/panel-viagens.component';
import { PanelFluxoComponent } from './panel-fluxo/panel-fluxo.component';
import { PanelCarregamentosComponent } from './panel-carregamentos/panel-carregamentos.component';
import { SaldoVeiculosComponent } from './panel-main/saldo-veiculos/saldo-veiculos.component';
import { PanelService } from './panel.service';
import { PanelMovtoestoqueComponent } from './panel-movtoestoque/panel-movtoestoque.component';
import { DatatableComponent } from './panel-movtoestoque/datatable/datatable.component';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdlModule,
    MdlDialogModule,
    MdlSelectModule,
    MdlDatePickerModule,
    DataTableModule
  ],
  declarations: [
    PanelComponent,
    PanelMainComponent,
    PanelSaldosComponent,
    PanelViagensComponent,
    PanelFluxoComponent,
    PanelCarregamentosComponent,
    SaldoVeiculosComponent,
    PanelMovtoestoqueComponent,
    DatatableComponent
    ],
  providers: [ 
    MdlDialogService,
    PanelService
  ],
  exports: [
    PanelComponent,
    DatatableComponent
  ]
})
export class PanelModule { }
