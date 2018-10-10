import { Component, OnInit, Input } from '@angular/core';
import { MovtoEstoque } from '../../../interfaces/MovtoEstoque.model';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input() MovtoEstoque : MovtoEstoque[];

  constructor() { }

  ngOnInit() {
  }

}
