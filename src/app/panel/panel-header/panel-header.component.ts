import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.css']
})
export class PanelHeaderComponent implements OnInit {
  title : string = environment.title;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout(e) {
    e.preventDefault;
    this.auth.logout();
  }

}
