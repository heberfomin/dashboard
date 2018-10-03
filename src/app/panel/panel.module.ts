import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule, MdlDialogModule, MdlDialogService } from '@angular-mdl/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PanelRoutingModule } from './panel.routing';
import { PanelComponent } from './panel.component';
import { PanelMainComponent } from './panel-main/panel-main.component';
import { PanelSaldosComponent } from './panel-saldos/panel-saldos.component';
import { PanelViagensComponent } from './panel-viagens/panel-viagens.component';
import { PanelFluxoComponent } from './panel-fluxo/panel-fluxo.component';
import { PanelCarregamentosComponent } from './panel-carregamentos/panel-carregamentos.component';
import { SaldoVeiculosComponent } from './panel-main/saldo-veiculos/saldo-veiculos.component';
import { PanelService } from './panel.service';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    HttpModule,
    MdlModule,
    MdlDialogModule
  ],
  declarations: [
    PanelComponent,
    PanelMainComponent,
    PanelSaldosComponent,
    PanelViagensComponent,
    PanelFluxoComponent,
    PanelCarregamentosComponent,
    SaldoVeiculosComponent
    ],
  providers: [ 
    MdlDialogService,
    PanelService
  ],
  exports: [
    PanelComponent,
  ]
})
export class PanelModule { }
