import { ElementRef, Injectable } from '@angular/core';
import { Person } from './person.interface';

@Injectable({
  providedIn: 'root'
})
export class BerndService implements Person {

  constructor() {
    console.log('constr BerndService');
  }

  public name(): string {
    return 'Bernd';
  }

  public coolStuff(elRef: ElementRef): void {
    console.log('bernd elRef', elRef);
  }
}
