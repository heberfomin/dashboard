import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-panel-main',
  templateUrl: './panel-main.component.html',
  styleUrls: ['./panel-main.component.css']
})
export class PanelMainComponent implements OnInit {
  imagem: string;

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.getTanks();
  }

  getTanks() {
    console.log(this.service.getSaldos().subscribe(resp => {
      console.log(resp)  
      }
    ));
    this.imagem = 'assets/img/tank_040.svg';
  }



}
