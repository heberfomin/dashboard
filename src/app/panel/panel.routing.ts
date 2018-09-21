import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { PanelMainComponent } from './panel-main/panel-main.component';

@NgModule({
  imports: [
    CommonModule,  
    RouterModule.forChild([
      {
        path: 'panel',
        component: PanelComponent,
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
