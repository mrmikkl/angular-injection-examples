import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Person } from './service/person.interface';
import { BerndService } from './service/bernd.service';

export const INJECTION_TOKEN = new InjectionToken<Person>('app.person');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  providers:    [
    {
      provide:  INJECTION_TOKEN,
      useClass: BerndService
    }
  ],
  bootstrap:    [AppComponent]
})
export class AppModule {}
