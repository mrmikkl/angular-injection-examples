import { Component, ElementRef, OnInit } from '@angular/core';
import { PersonWithConstructorParamsService } from '../../service/person-with-constructor-params.service';

export function PERSON_WITH_CONSTR_PARAM_FACTORY(elRef: ElementRef): PersonWithConstructorParamsService {
  return new PersonWithConstructorParamsService(elRef);
}

@Component({
  selector:    'app-injection-via-factory',
  templateUrl: './injection-via-factory.component.html',
  styleUrls:   ['./injection-via-factory.component.scss'],
  providers:   [
    {
      provide:    PersonWithConstructorParamsService,
      useFactory: PERSON_WITH_CONSTR_PARAM_FACTORY,
      deps:       [ElementRef]
    }
  ]
})
export class InjectionViaFactoryComponent implements OnInit {
  constructor(private service: PersonWithConstructorParamsService) {
  }

  ngOnInit(): void {
  }

  printName(): string {
    return this.service.name();
  }
}
