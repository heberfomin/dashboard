import { Component, OnInit, Input } from '@angular/core';
import { PanelService } from '../../panel.service';

@Component({
  selector: 'app-datatable-carregamentos',
  templateUrl: './datatable-carregamentos.component.html',
  styleUrls: ['./datatable-carregamentos.component.css']
})
export class DatatableCarregamentosComponent implements OnInit {
  @Input() Carregamentos;

  constructor(private panelService: PanelService) { }

  ngOnInit() {
  }

}
