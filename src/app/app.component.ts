import { Component, ElementRef } from '@angular/core';
import { SimpleService } from './service/simple.service';
import { PersonWithOwnMethodService } from './service/person-with-own-method.service';

export function horstServiceFactory(elRef: ElementRef): SimpleService {
  return new SimpleService(elRef);
}

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss'] // providers:   [
  //   {
  //     provide:    HorstService,
  //     useFactory: horstServiceFactory,
  //     deps:       [ElementRef]
  //   }
  // ]
})
export class AppComponent {
  title = 'injectors';

  constructor(private readonly horstService: SimpleService, private berndService: PersonWithOwnMethodService, private elRef: ElementRef) {
    // console.log(this.horstService.name());
    // horstService.coolStuff();
    // berndService.coolStuff(elRef);
  }
}
