import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { PanelMainComponent } from './panel-main/panel-main.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { PanelViagensComponent } from './panel-viagens/panel-viagens.component';
import { PanelFluxoComponent } from './panel-fluxo/panel-fluxo.component';
import { PanelCarregamentosComponent } from './panel-carregamentos/panel-carregamentos.component';

@NgModule({
  imports: [
    CommonModule,  
    RouterModule.forChild([
      {
        path: 'panel',
        component: PanelComponent, canActivate: [ AuthGuard ], canActivateChild: [ AuthGuard ],
        children: [
          { path: '', redirectTo: 'main', pathMatch: 'full' },
          { path: 'main', component: PanelMainComponent },
          { path: 'viagens', component: PanelViagensComponent },
          { path: 'fluxo', component: PanelFluxoComponent },
          { path: 'carregamentos', component: PanelCarregamentosComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PanelRoutingModule { }
