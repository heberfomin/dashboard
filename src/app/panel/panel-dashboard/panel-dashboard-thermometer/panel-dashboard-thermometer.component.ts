import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-dashboard-thermometer',
  templateUrl: './panel-dashboard-thermometer.component.html',
  styleUrls: ['./panel-dashboard-thermometer.component.css']
})
export class PanelDashboardThermometerComponent implements OnInit {
  @Input() public height;
  @Input() public value;
  public color;
  public bulb;

  constructor() { }

  ngOnInit() {
    this.color = this.getColor(this.height);
    this.bulb  = 'bulb-' + this.color;
  }
  
  getColor(value) {
    if (value < 170) {
      return 'red';
    } 
    if (value > 170 && value < 340 ) {
      return 'yellow';
    }
    if (value >= 340) {
      return 'green';
    }
  }
}
