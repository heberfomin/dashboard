import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  titulo  : string = environment.title;

  constructor(private auth: AuthService) {  }

  ngOnInit() {
  }
  logout(e) {
    e.preventDefault;
    this.auth.logout();
  
  }

}
