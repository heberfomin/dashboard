import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { PanelMainComponent } from './panel-main/panel-main.component';
import { AuthGuard } from '../auth/guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,  
    RouterModule.forChild([
      {
        path: 'panel',
        component: PanelComponent, 
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'main',
            pathMatch: 'full'
          },
          {
            path: 'main',
            component: PanelMainComponent
          },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PanelRoutingModule { }
