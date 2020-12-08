import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../service/simple.service';

@Component({
  selector:    'app-easy-injection-with-provider',
  templateUrl: './easy-injection-with-provider.component.html',
  styleUrls:   ['./easy-injection-with-provider.component.scss'],
  providers:   [
    {
      provide:  SimpleService,
      useClass: SimpleService
    }
  ]
  // The same as
  //
  // providers: [
  //   HorstService
  // ]
})
export class EasyInjectionWithProviderComponent implements OnInit {

  constructor(private horstService: SimpleService) {
  }

  ngOnInit(): void {
  }

  printName(): string {
    return this.horstService.name();
  }
}
