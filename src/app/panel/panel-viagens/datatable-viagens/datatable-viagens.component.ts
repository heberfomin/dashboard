import { Component, OnInit, Input } from '@angular/core';
import { PanelService } from '../../panel.service';

@Component({
  selector: 'app-datatable-viagens',
  templateUrl: './datatable-viagens.component.html',
  styleUrls: ['./datatable-viagens.component.css']
})
export class DatatableViagensComponent implements OnInit {
  @Input() viagens;

  constructor(private panelService: PanelService) { }

  ngOnInit() {
  }

}
