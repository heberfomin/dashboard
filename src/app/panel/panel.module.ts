import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';
import { HttpModule } from '@angular/http';

import { PanelRoutingModule } from './panel.routing';
import { PanelComponent } from './panel.component';
import { PanelMainComponent } from './panel-main/panel-main.component';
import { PanelSaldosComponent } from './panel-saldos/panel-saldos.component';
import { PanelViagensComponent } from './panel-viagens/panel-viagens.component';
import { PanelFluxoComponent } from './panel-fluxo/panel-fluxo.component';
import { PanelCarregamentosComponent } from './panel-carregamentos/panel-carregamentos.component';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
    HttpModule,
    MdlModule
  ],
  declarations: [
    PanelComponent,
    PanelMainComponent,
    PanelSaldosComponent,
    PanelViagensComponent,
    PanelFluxoComponent,
    PanelCarregamentosComponent
    ],
  providers: [ 
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
