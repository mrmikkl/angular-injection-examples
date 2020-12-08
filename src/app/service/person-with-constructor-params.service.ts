import { ElementRef, Injectable } from '@angular/core';
import { PersonService } from './person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonWithConstructorParamsService implements PersonService {
  constructor(private elRef: ElementRef) {
  }

  public name(): string {
    return 'PersonWithConstructorParamsService ' + this.elRef.nativeElement.content;
  }
}
