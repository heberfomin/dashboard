import { Component, OnInit } from '@angular/core';
import { MdlDialogService } from '@angular-mdl/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DaysCalculation } from 'src/app/models/daysCalculation.model';
import { ContasMaeService } from 'src/app/services/contas-mae.service';
import { IContasMae } from 'src/app/interfaces/icontas-mae';
import { ITotais } from 'src/app/interfaces/iTotais';
import { totais } from 'src/app/models/totais.model';

@Component({
  selector: 'app-panel-dashboard',
  templateUrl: './panel-dashboard.component.html',
  styleUrls: ['./panel-dashboard.component.css']
})
export class PanelDashboardComponent implements OnInit {
  public contasMae: IContasMae[];
  public totais: ITotais[];
  public labels: string[] = [];
  public valores: string[] = [];
  diasCalculo : DaysCalculation;

  constructor(private dialogService: MdlDialogService,
              private service : AuthService,
              private contasService : ContasMaeService) { }

  ngOnInit() {
    this.service.getVolumes();
    this.service.getContasMae().subscribe(contasMae => { this.takeInstance(contasMae) });
  } 
  
  takeInstance(result) {
    this.contasMae = result.contasMae;
    this.totais = new Array<ITotais>(); 
    var index = -1;
    this.contasMae.forEach(data => { 
      if (this.totais[0] != undefined) {
        for (let i=0;i<this.totais.length;i++) {
          index = this.totais[i].codProduto === data.codProduto ? i : -1;
        }
      }  
      if (index === -1) {
        const total = new totais(data.codProduto,data.numValVenda);
        this.totais.push(total);
      } else {
        var valor1: string = this.totais[index].numValVenda.toString();
        var valor2: string = data.numValVenda.toString();
        this.totais[index].numValVenda = parseFloat(valor1) + parseFloat(valor2);
      }
    });
    this.totais.forEach(data => {
      this.labels.push(data.codProduto);
      this.valores.push(data.numValVenda.toString());
    });
    console.log(this.labels,this.valores);
  }
}
