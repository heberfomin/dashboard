import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { PanelRoutingModule } from './panel.routing';
import { PanelComponent } from './panel.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelMainComponent } from './panel-main/panel-main.component';
import { PanelFooterComponent } from './panel-footer/panel-footer.component';
import { PanelSaldosComponent } from './panel-saldos/panel-saldos.component';
import { PanelViagensComponent } from './panel-viagens/panel-viagens.component';
import { PanelFluxoComponent } from './panel-fluxo/panel-fluxo.component';
import { PanelDrawerComponent } from './panel-drawer/panel-drawer.component';


@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
    MdlModule
  ],
  declarations: [
    PanelComponent,
    PanelHeaderComponent, 
    PanelMainComponent,
    PanelFooterComponent,
    PanelSaldosComponent,
    PanelViagensComponent,
    PanelFluxoComponent,
    PanelDrawerComponent
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
