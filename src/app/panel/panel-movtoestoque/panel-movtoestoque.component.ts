import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-panel-movtoestoque',
  templateUrl: './panel-movtoestoque.component.html',
  styleUrls: ['./panel-movtoestoque.component.css']
})
export class PanelMovtoestoqueComponent implements OnInit {
  public produtos;

  constructor(private auth: AuthService, private panelService: PanelService) { }

  ngOnInit() {
    return(this.auth.getProdutos().subscribe(resp => { 
      this.produtos  = this.panelService.parsecodProdutos(resp.produtos);
      console.log(this.produtos);
    }
    ));
  }

}
