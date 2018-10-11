import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datatable-viagens',
  templateUrl: './datatable-viagens.component.html',
  styleUrls: ['./datatable-viagens.component.css']
})
export class DatatableViagensComponent implements OnInit {
  @Input() viagens;

  constructor() { }

  ngOnInit() {
  }

}
