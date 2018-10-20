import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelDashboardComponent } from './panel-dashboard/panel-dashboard.component';
import { MdlModule, MdlDialogModule, MdlDialogService } from '@angular-mdl/core';
import { MdlSelectModule } from '@angular-mdl/select';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';
import { DataTableModule } from "angular-6-datatable";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PanelRoutingModule } from './panel.routing';
import { PanelComponent } from './panel.component';
import { PanelDashboardVolumesComponent } from './panel-dashboard/panel-dashboard-volumes/panel-dashboard-volumes.component';
import { PanelDashboardThermometerComponent } from './panel-dashboard/panel-dashboard-thermometer/panel-dashboard-thermometer.component';
import { PanelDashboardContasMaeComponent } from './panel-dashboard/panel-dashboard-contas-mae/panel-dashboard-contas-mae.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PanelRoutingModule,
    MdlModule,
    MdlDialogModule,
    MdlSelectModule,
    MdlDatePickerModule,
    DataTableModule,
  ],
  declarations: [
    PanelComponent,
    PanelDashboardComponent,
    PanelDashboardVolumesComponent,
    PanelDashboardThermometerComponent,
    PanelDashboardContasMaeComponent
  ],
  providers:[
    MdlDialogService,
  ],
  exports: [
    PanelComponent,
    PanelDashboardThermometerComponent,
    PanelDashboardContasMaeComponent
  ]
})
export class PanelModule { }
