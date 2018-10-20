import { Injectable } from '@angular/core';
import { IContasMae } from '../interfaces/icontas-mae';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  contasMae : IContasMae[];

  constructor() { }

}
