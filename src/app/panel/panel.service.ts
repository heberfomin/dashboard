import { Injectable } from '@angular/core';
import { SaldoData } from '../interfaces/saldos.model';
import { SaldoVeiculoData } from '../interfaces/saldoVeiculos.model';
import { ProdutoData } from '../interfaces/produtos.model';
import { SaldosPorProdutoData } from '../interfaces/saldosPorProduto.model';
import { SaldoTotalData } from '../interfaces/saldoTotal.model';
import { Transacoes } from '../interfaces/Transacoes.model';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
 
  constructor() { }

  parseData(jsonData) {
    var saldos: SaldoData[] = [];
    for (let i = 0; i < jsonData.length; i++) {
      const data = new SaldoData(jsonData[i].numTanque,jsonData[i].codProduto,jsonData[i].numCapacidade,jsonData[i].numQuantidadeAtual,jsonData[i].numTotal);
      saldos.push(data);
    }
    return saldos;
  }

  parseDataVeiculos(jsonData) {
    var saldosVeiculos : SaldoVeiculoData[] = [];
    for (let i = 0; i < jsonData.length; i++) {
      const data = new SaldoVeiculoData(jsonData[i].codPlaca,jsonData[i].indMultCompart,jsonData[i].indTamanho,
        jsonData[i].numCapacidadeL,jsonData[i].numCapacidadeM3,jsonData[i].numCompart,jsonData[i].numVolCompart1,
        jsonData[i].numVolCompart2,jsonData[i].numVolCompart3,jsonData[i].numOcupado, jsonData[i].percentage, 
        jsonData[i].saldos);
      saldosVeiculos.push(data);
    }
    return saldosVeiculos;
  }

  parseProdutos(jsonData) {
    var produtos : ProdutoData[] = [];
    for (let i = 0;i<jsonData.length;i++) {
      const data = new ProdutoData(jsonData[i].produto);
      produtos.push(data);
    }
    return produtos;
  }
  parseSaldoDet(jsonData,produtos) {
    var  total: number[] = [0];
    var  valor: number;
    var  saldosDet : SaldosPorProdutoData[] = [];
    for (let i = 0; i < jsonData.length; i++) {
      if (i == 0) {
        for (let n = 0; n<jsonData[i].produtos.length;n ++) {
          total[n] = 0;
        }
      }
      for (let n = 0; n<jsonData[i].produtos.length;n ++) {
        valor = Number(jsonData[i].produtos[n]);
        total[n] = total[n] + valor;
      }
      //console.log(total);
      const data = new SaldosPorProdutoData( jsonData[i].local, jsonData[i].produtos, produtos);
      saldosDet.push(data);
    }
    const data = new SaldosPorProdutoData( 'TOTAL', total, produtos);
    saldosDet.push(data);  
    return saldosDet;
  }

  parseSaldos(jsonData) {
    var saldosTotal : SaldoTotalData[] = [];
    for (let i = 0; i < jsonData.length; i++) {
      const data = new SaldoTotalData(jsonData[i].codProduto,jsonData[i].numQuantidade);
      saldosTotal.push(data);
    }
    return saldosTotal;
  }

  parsecodProdutos(jsonData) {
    var produtos = [];
    for (let i = 0; i< jsonData.length; i++) {
      const data = Array(jsonData[i].codProduto);
      produtos.push(data);
    }
    return produtos;
  }

  parsecodPlaca(jsonData) {
    console.log(jsonData);
    var veiculos = [];
    for (let i = 0; i< jsonData.length; i++) {
      const data = Array(jsonData[i].codPlaca);
      veiculos.push(data);
    }
    return veiculos;
  }

  parseTransacoes(jsonData) {
    var ArrayTransacoes : Transacoes[] = [];
    for (let i = 0;i<jsonData.length; i++) {
      const data = new Transacoes(jsonData[i].codTransacao,jsonData[i].desTransacao);
      ArrayTransacoes.push(data);
    }
    return ArrayTransacoes;
  }
}
