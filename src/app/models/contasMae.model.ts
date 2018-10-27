import { IContasMae } from "../interfaces/icontas-mae";

export class contasMae implements IContasMae {
  constructor(
      public codEstab: string,
      public codProduto: string,
      public desContaMae: string,
      public codRep: number,
      public numQuantidade: number,
      public numValVenda: number,
      public numValMedio: number 
      ) {}
}