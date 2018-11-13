import { Component, OnInit } from '@angular/core';
import { MdlDialogService } from '@angular-mdl/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DaysCalculation } from 'src/app/models/daysCalculation.model';

@Component({
  selector: 'app-panel-dashboard',
  templateUrl: './panel-dashboard.component.html',
  styleUrls: ['./panel-dashboard.component.css']
})
export class PanelDashboardComponent implements OnInit {
  diasCalculo : DaysCalculation;

  constructor(private dialogService: MdlDialogService,
              private service : AuthService) { }

  ngOnInit() {
    this.service.getVolumes();
  } 
}
