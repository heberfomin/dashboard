export class SaldoVeiculoData{
    private codPlaca: string;
    private indMultCompart: number;
    private indTamanho: number;
    private numCapacidadeL: number;
    private numCapacidadeM3: number;
    private numCompart: number;
    private numVolCompart1: number;
    private numVolCompart2: number;
    private numVolCompart3: number;
    private image: string;
    private multi: string;

    constructor(codPlaca,indMultCompart,indTamanho,numCapacidadeL,numCapacidadeM3,numCompart,numVolCompart1,numVolCompart2,numVolCompart3) {
        var imagens = ['pequeno','medio','grande'];
        this.codPlaca        = codPlaca;       
        this.indMultCompart  = indMultCompart; 
        this.indTamanho      = indTamanho;     
        this.numCapacidadeL  = numCapacidadeL; 
        this.numCapacidadeM3 = numCapacidadeM3;
        this.numCompart      = numCompart;     
        this.numVolCompart1  = numVolCompart1; 
        this.numVolCompart2  = numVolCompart2; 
        this.numVolCompart3  = numVolCompart3; 
        this.image = `assets/img/${imagens[this.indTamanho]}-vazio.svg`;
        this.multi = this.indMultCompart == 1 ? 'SIM' : 'NÃO';
                 
    }
}