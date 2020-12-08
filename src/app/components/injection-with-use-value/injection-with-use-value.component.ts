import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../service/simple.service';

export const SIMPLE_SERVICE: SimpleService = {
  name(): string {
    return 'SIMPLE_SERVICE from InjectionWithUseValueComponent';
  }
};

@Component({
  selector:    'app-injection-with-use-value',
  templateUrl: './injection-with-use-value.component.html',
  styleUrls:   ['./injection-with-use-value.component.scss'],
  providers:   [
    {
      provide:  SimpleService,
      useValue: SIMPLE_SERVICE
    }
  ]
})
export class InjectionWithUseValueComponent implements OnInit {

  constructor(private simpleService: SimpleService) {
  }

  ngOnInit(): void {
  }

  printName(): string {
    return this.simpleService.name();
  }
}
