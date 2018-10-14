import { Component, OnInit, Input } from '@angular/core';
import { PanelService } from '../../panel.service';

@Component({
  selector: 'app-datatable-fluxo',
  templateUrl: './datatable-fluxo.component.html',
  styleUrls: ['./datatable-fluxo.component.css']
})
export class DatatableFluxoComponent implements OnInit {
  @Input() fluxo;
  public imagem;
  tipos = ['Troca Caminhão','Troca Turno','Turno e Caminhão','Checkpoint','Fora da Base','Transbordo'];

  constructor(private panelService: PanelService) { }

  ngOnInit() {
  }

  getTipo(tipo) {
    const i = parseInt(tipo,10) - 1;
    return this.tipos[i];
  }
  setImagem(imagem) {
    console.log(imagem);
    return this.imagem = imagem;
  }
}
