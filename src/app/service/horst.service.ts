import { ElementRef, Injectable } from '@angular/core';
import { Person } from './person.interface';

@Injectable({
  providedIn: 'root' // useClass: HorstService,
  // deps: [BerndService]
})
export class HorstService implements Person {

  constructor(private elRef: ElementRef) {
    console.log('constr HorstService');
  }

  public name(): string {
    return 'Horst';
  }

  public coolStuff(): void {
    console.log('horst elRef', this.elRef);
    console.log(`horst elRef ${this.elRef}`);
    console.log({bla: this.elRef});
  }
}
