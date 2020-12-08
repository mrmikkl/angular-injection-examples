import { ElementRef, Injectable } from '@angular/core';
import { PersonService } from './person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonWithOwnMethodService implements PersonService {

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
