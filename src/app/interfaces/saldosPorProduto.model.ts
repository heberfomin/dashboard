export class SaldosPorProdutoData{
    private codLocal: string;
    private produtos: Array<{
        numSeq: number;
        numQuantidade: number;
    }>
    private codigos: Array<{codProduto: string}>;        
    constructor(codLocal, produtos, codigos) {
        this.codLocal   = codLocal;
        this.produtos   = produtos;
        this.codigos    = codigos;
    }
}