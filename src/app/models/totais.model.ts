import { ITotais } from "../interfaces/iTotais";

export class totais implements ITotais {
    constructor(public codProduto, public numValVenda) {}
}