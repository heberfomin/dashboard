import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelDashboardComponent } from './panel-dashboard/panel-dashboard.component';
import { MdlModule, MdlDialogModule, MdlDialogService } from '@angular-mdl/core';
import { MdlSelectModule } from '@angular-mdl/select';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';
import { DataTableModule } from "angular-6-datatable";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PanelRoutingModule } from './panel.routing';
import { PanelComponent } from './panel.component';
import { PanelDashboardVolumesComponent } from './panel-dashboard/panel-dashboard-volumes/panel-dashboard-volumes.component';
import { PanelDashboardThermometerComponent } from './panel-dashboard/panel-dashboard-thermometer/panel-dashboard-thermometer.component';
import { PanelDashboardContasMaeComponent } from './panel-dashboard/panel-dashboard-contas-mae/panel-dashboard-contas-mae.component';
import { OrderbynumQuantidadeDescPipe } from '../pipes/orderbynumQuantidadeDesc.pipe';
import { PanelDashboardGaugeComponent } from './panel-dashboard/panel-dashboard-gauge/panel-dashboard-gauge.component';
import { PanelDashboardPeriodosMoveisComponent } from './panel-dashboard/panel-dashboard-periodos-moveis/panel-dashboard-periodos-moveis.component';
import { PanelDashboardComprasComponent } from './panel-dashboard/panel-dashboard-compras/panel-dashboard-compras.component';
import { PanelDashboardEstoqueComponent } from './panel-dashboard/panel-dashboard-estoque/panel-dashboard-estoque.component';
import { CallbackPipe } from '../pipes/calback.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
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
    PanelDashboardContasMaeComponent,
    OrderbynumQuantidadeDescPipe,
    CallbackPipe,
    PanelDashboardGaugeComponent,
    PanelDashboardPeriodosMoveisComponent,
    PanelDashboardComprasComponent,
    PanelDashboardEstoqueComponent
  ],
  providers:[
    MdlDialogService,
  ],
  exports: [
    PanelComponent,
    PanelDashboardThermometerComponent,
    PanelDashboardContasMaeComponent,
    PanelDashboardGaugeComponent,
    OrderbynumQuantidadeDescPipe,
  ]
})
export class PanelModule { }
