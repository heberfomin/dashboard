import { Component, OnInit, Input } from '@angular/core';
import { IContasMae } from 'src/app/interfaces/icontas-mae';

@Component({
  selector: 'app-panel-dashboard-contas-mae',
  templateUrl: './panel-dashboard-contas-mae.component.html',
  styleUrls: ['./panel-dashboard-contas-mae.component.css']
})
export class PanelDashboardContasMaeComponent implements OnInit {
@Input() contasMae;
  constructor() {
   }

  ngOnInit() {
  }

}
