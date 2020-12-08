import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../service/simple.service';
import { AnotherSimpleService } from '../../service/another-simple.service';

@Component({
  selector:    'app-injection-with-exchanging-service-impl',
  templateUrl: './injection-with-exchanging-service-impl.component.html',
  styleUrls:   ['./injection-with-exchanging-service-impl.component.scss'],
  providers:   [
    {
      provide:     SimpleService,
      useExisting: AnotherSimpleService
    }
  ]
})
export class InjectionWithExchangingServiceImplComponent implements OnInit {

  constructor(private horstService: SimpleService) {
  }

  ngOnInit(): void {
  }

  printName(): string {
    return this.horstService.name();
  }
}
