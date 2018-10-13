import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datatable-entregas',
  templateUrl: './datatable-entregas.component.html',
  styleUrls: ['./datatable-entregas.component.css']
})
export class DatatableEntregasComponent implements OnInit {
  @Input() entregas;

  constructor() { }

  ngOnInit() {
  }

}
