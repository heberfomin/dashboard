import { IPeriodosMoveis } from "../interfaces/IPeriodosMoveis";

export class PeriodosMoveis implements IPeriodosMoveis {
    constructor (public codProduto, public volumes) {
    } 
}