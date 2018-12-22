export class vencidos {
    codProduto: string;
    desGrupo: string;
    numLitros: number;
    numServicos: number;
    numfrete: number;
    numVencidoAte5: number;
    numVencido5a9: number;
    numVencido10a19: number;
    numVencido20a29: number;
    numVencido30a59: number;
    numVencidomais60: number;
    constructor(codProduto, desGrupo, numLitros, numServicos, numFrete,
                numVencidoAte5, numVencido5a9, numVencido10a19, numVencido20a29,
                numVencido30a59, numVencidomais60 ) {
                    this.codProduto       = codProduto;
                    this.desGrupo         = desGrupo;
                    this.numLitros        = numLitros;
                    this.numServicos      = numServicos;
                    this.numfrete         = numFrete;
                    this.numVencidoAte5   = numVencidoAte5;
                    this.numVencido5a9    = numVencido5a9;
                    this.numVencido10a19  = numVencido10a19;
                    this.numVencido20a29  = numVencido20a29;
                    this.numVencido30a59  = numVencido30a59;
                    this.numVencidomais60 = numVencidomais60;
                }
}