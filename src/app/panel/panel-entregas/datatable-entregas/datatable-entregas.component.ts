import { Component, OnInit, Input } from '@angular/core';
import { PanelService } from '../../panel.service';

@Component({
  selector: 'app-datatable-entregas',
  templateUrl: './datatable-entregas.component.html',
  styleUrls: ['./datatable-entregas.component.css']
})
export class DatatableEntregasComponent implements OnInit {
  @Input() entregas;

  constructor(private panelService: PanelService) { }

  ngOnInit() {
  }

}
