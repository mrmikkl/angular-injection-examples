import { Injectable } from '@angular/core';
import { PersonService } from './person.interface';

@Injectable({
  providedIn: 'root' // useClass: HorstService,
  // deps: [BerndService]
})
export class SimpleService implements PersonService {

  constructor() {
  }

  // constructor(private elRef: ElementRef) {
  //   console.log('constr HorstService');
  // }

  public name(): string {
    return 'SimpleService';
  }

  public coolStuff(): void {
    // console.log('horst elRef', this.elRef);
    // console.log(`horst elRef ${this.elRef}`);
    // console.log({bla: this.elRef});
  }
}
