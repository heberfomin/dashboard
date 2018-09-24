export class SaldoData{
    private numTanque: number;
    private codProduto: string;
    private numCapacidade: number;
    private numQuantidadeAtual: number;
    private numTotal: number;
    private image: string;
    private percentage: number;

    constructor(numTanque,codProduto,numCapacidade,numQuantidadeAtual,numTotal) {
        this.numTanque = numTanque;
        this.codProduto = codProduto;
        this.numCapacidade = numCapacidade;
        this.numQuantidadeAtual = numQuantidadeAtual;
        this.numTotal = numTotal;
        if (this.numQuantidadeAtual >= this.numCapacidade) {
            this.image = 'overflow'
        } 
        this.percentage = ( numQuantidadeAtual / numCapacidade ) * 100;
        this.image =  `0${this.percentage.toString()[0]}0`;     
    }
}