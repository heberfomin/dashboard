import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PanelComponent } from "./panel.component";
import { AuthGuard } from "../auth/guards/auth.guard";
import { PanelDashboardComponent } from "./panel-dashboard/panel-dashboard.component";

@NgModule({
    imports: [
      CommonModule,  
      RouterModule.forChild([
        {
          path: 'panel',
          component: PanelComponent, canActivate: [ AuthGuard ], canActivateChild: [ AuthGuard ],
          children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: PanelDashboardComponent },
          ]
        }
      ])
    ],
    exports: [
      RouterModule
    ]
  })
  export class PanelRoutingModule { }
  