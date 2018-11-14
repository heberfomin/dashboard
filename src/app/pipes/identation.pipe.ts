import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identation'
})
export class OrderbynumQuantidadeDescPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort((a, b) => parseFloat(b.numQuantidade) - parseFloat(a.numQuantidade));
  }
}