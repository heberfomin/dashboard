import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommomService {
  colorPalete = [ 
    'rgba(255,255,255,0.5)',
    'rgba(255,0,0,0.5)',
    'rgba(0,255,0,0.5)',
    'rgba(0,0,255,0.5)',
    'rgba(255,255,0,0.5)',
    'rgba(255,0,255,0.5)',
    'rgba(0,255,255,0.5)',
    'rgba(128,0,0,0.5)',
    'rgba(0,128,0,0.5)',
    'rgba(0,0,128,0.5)',
    'rgba(128,128,0,0.5)',
    'rgba(128,0,128,0.5)',
    'rgba(0,128,128,0.5)',
    'rgba(192,192,192,0.5)',
    'rgba(128,128,128,0.5)',
    'rgba(153,153,255,0.5)',
    'rgba(153,51,102,0.5)',
    'rgba(255,255,204,0.5)',
    'rgba(204,255,255,0.5)',
    'rgba(102,0,102,0.5)',
    'rgba(255,128,128,0.5)',
    'rgba(0,102,204,0.5)',
    'rgba(204,204,255,0.5)',
    'rgba(0,0,128,0.5)',
    'rgba(255,0,255,0.5)',
    'rgba(255,255,0,0.5)',
    'rgba(0,255,255,0.5)',
    'rgba(128,0,128,0.5)',
    'rgba(128,0,0,0.5)',
    'rgba(0,128,128,0.5)',
    'rgba(0,0,255,0.5)',
    'rgba(0,204,255,0.5)',
    'rgba(204,255,255,0.5)',
    'rgba(204,255,204,0.5)',
    'rgba(255,255,153,0.5)',
    'rgba(153,204,255,0.5)',
    'rgba(255,153,204,0.5)',
    'rgba(204,153,255,0.5)',
    'rgba(255,204,153,0.5)',
    'rgba(51,102,255,0.5)',
    'rgba(51,204,204,0.5)',
    'rgba(153,204,0,0.5)',
    'rgba(255,204,0,0.5)',
    'rgba(255,153,0,0.5)',
    'rgba(255,102,0,0.5)',
    'rgba(102,102,153,0.5)',
    'rgba(150,150,150,0.5)',
    'rgba(0,51,102,0.5)',
    'rgba(51,153,102,0.5)',
    'rgba(0,51,0,0.5)',
    'rgba(51,51,0,0.5)',
    'rgba(153,51,0,0.5)',
    'rgba(153,51,102,0.5)',
    'rgba(51,51,153,0.5)',
    'rgba(51,51,51,0.5)',
  ];
  constructor() { }

  truncateDecimals(number,digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
  };
}
