import { Injectable } from '@angular/core';
import { PersonService } from './person.interface';

@Injectable({
  providedIn: 'root'
})
export class SimpleService implements PersonService {

  constructor() {
  }

  public name(): string {
    return 'SimpleService';
  }
}
