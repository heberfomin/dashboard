import { Component, OnInit } from '@angular/core';
import { MdlDialogService } from '@angular-mdl/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DaysCalculation } from 'src/app/models/daysCalculation.model';
import { GetDataService } from 'src/app/services/get-data.service';
import { IEstoque } from 'src/app/interfaces/IEstoque';
import { Produtos } from 'src/app/models/Produtos.model';

@Component({
  selector: 'app-panel-dashboard',
  templateUrl: './panel-dashboard.component.html',
  styleUrls: ['./panel-dashboard.component.css']
})
export class PanelDashboardComponent implements OnInit {
  diasCalculo : DaysCalculation;

  constructor(private dialogService: MdlDialogService,
              private service : AuthService,
              private getData : GetDataService) { }

  ngOnInit() {
    this.service.getVolumes();
    this.getData.getDataEstoque();
    this.getData.getDataCR();
  }

}
