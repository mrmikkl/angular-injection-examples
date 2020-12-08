import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { PersonService } from '../../service/person.interface';
import { SimpleService } from '../../service/simple.service';

export const PERSON_INJECTION_TOKEN = new InjectionToken<PersonService>('app.person.service');

@Component({
  selector:    'app-injection-of-interface-via-injection-token',
  templateUrl: './injection-of-interface-via-injection-token.component.html',
  styleUrls:   ['./injection-of-interface-via-injection-token.component.scss'],
  providers:   [
    {
      provide:  PERSON_INJECTION_TOKEN,
      useClass: SimpleService
    }
  ]
})
export class InjectionOfInterfaceViaInjectionTokenComponent implements OnInit {
  constructor(@Inject(PERSON_INJECTION_TOKEN) private personService: PersonService) {
  }

  ngOnInit(): void {
  }

  printName(): string {
    return this.personService.name();
  }
}
