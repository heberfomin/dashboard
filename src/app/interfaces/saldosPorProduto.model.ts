export class SaldosPorProdutoData{
    private codLocal: string;
    public produtos: Array<{
        numSeq: number;
        numQuantidade: number;
    }>
    private codigos: Array<{codProduto: string}>;        
    constructor(codLocal, produtos, codigos) {
        this.codLocal   = codLocal;
        this.produtos   = produtos;
        this.codigos    = codigos;
    }
    getLocal() {
        return this.codLocal;
    }
}