import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionWithExchangingServiceImplComponent } from './injection-with-exchanging-service-impl.component';

describe('InjectionWithExchangingServiceImplComponent', () => {
  let component: InjectionWithExchangingServiceImplComponent;
  let fixture: ComponentFixture<InjectionWithExchangingServiceImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjectionWithExchangingServiceImplComponent]
    })
                 .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionWithExchangingServiceImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
