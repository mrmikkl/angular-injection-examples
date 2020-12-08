import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonService } from './service/person.interface';
import { PersonWithOwnMethodService } from './service/person-with-own-method.service';
import { EasyInjectionComponent } from './components/easy-injection/easy-injection.component';
import { EasyInjectionWithProviderComponent } from './components/easy-injection-with-provider/easy-injection-with-provider.component';
import { InjectionWithExchangingServiceImplComponent } from './components/injection-with-exchanging-service-impl/injection-with-exchanging-service-impl.component';
import { InjectionViaFactoryComponent } from './components/injection-via-factory/injection-via-factory.component';
import { InjectionOfInterfaceViaInjectionTokenComponent } from './components/injection-of-interface-via-injection-token/injection-of-interface-via-injection-token.component';
import { InjectionWithUseValueComponent } from './components/injection-with-use-value/injection-with-use-value.component';

export const INJECTION_TOKEN = new InjectionToken<PersonService>('app.person');

@NgModule({
  declarations: [
    AppComponent,
    EasyInjectionComponent,
    EasyInjectionWithProviderComponent,
    InjectionWithExchangingServiceImplComponent,
    InjectionViaFactoryComponent,
    InjectionOfInterfaceViaInjectionTokenComponent,
    InjectionWithUseValueComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  providers:    [
    {
      provide:  INJECTION_TOKEN,
      useClass: PersonWithOwnMethodService
    }
  ],
  bootstrap:    [AppComponent]
})
export class AppModule {}
