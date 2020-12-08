import { Component, ElementRef } from '@angular/core';
import { HorstService } from './service/horst.service';
import { BerndService } from './service/bernd.service';

export function horstServiceFactory(elRef: ElementRef): HorstService {
  return new HorstService(elRef);
}

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss'],
  providers:   [
    {
      provide:    HorstService,
      useFactory: horstServiceFactory,
      deps:       [ElementRef]
    }
  ]
})
export class AppComponent {
  title = 'injectors';

  constructor(private readonly horstService: HorstService, private berndService: BerndService, private elRef: ElementRef) {
    console.log(this.horstService.name());
    horstService.coolStuff();
    berndService.coolStuff(elRef);
  }
}
