import { IEstoque } from "../interfaces/IEstoque";

export class Estoque implements IEstoque {
    constructor(public codProduto,
                public numSequencia,
                public desTitulo,
                public numPeriodo,
                public desMesAno,
                public numQuantidade) {}
}