import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  titulo  : string = environment.title;

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    this.auth.getVolumes();
    this.auth.getContasMae();            
  }

  logout(e) {
    e.preventDefault;
    this.auth.logout();
  
  }
}
