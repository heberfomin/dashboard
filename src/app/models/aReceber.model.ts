export class aReceber {
    desEstabel: string;
    codProduto: string;
    numFaixaInicial: number;
    numFaixaFinal: number;
    numLitros: number;
    numServicos: number;
    numFrete: number;
    numValorHoje: number;
    numValor5dias: number;
    numValor10dias: number;
    numValor20dias: number;
    numValor30dias: number;
    numValorMais30: number;
    constructor(desEstabel, codProduto, numFaixaInicial, numFaixaFinal, numLitros, numServicos, numFrete,
                numValorHoje, numValor5dias, numValor10dias, numValor20dias, numValor30dias, 
                numValorMais30 ) {
                    this.desEstabel      = desEstabel;
                    this.codProduto      = codProduto;
                    this.numFaixaInicial = numFaixaInicial;
                    this.numFaixaFinal   = numFaixaFinal;
                    this.numLitros       = numLitros;
                    this.numServicos     = numServicos;
                    this.numFrete        = numFrete;
                    this.numValorHoje    = numValorHoje;
                    this.numValor5dias   = numValor5dias;
                    this.numValor10dias  = numValor10dias;
                    this.numValor20dias  = numValor20dias;
                    this.numValor30dias  = numValor30dias;
                    this.numValorMais30  = numValorMais30;
                }
}