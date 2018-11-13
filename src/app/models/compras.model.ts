import { ICompras } from "../interfaces/iCompras";

export class compras implements ICompras {
    constructor(public codEstabel, 
                public codProduto, 
                public nomeAbrev, 
                public numQtdAprazo, 
                public numQtdAvista, 
                public numQtdTotal, 
                public valMedio, 
                public valTotal) {}
}