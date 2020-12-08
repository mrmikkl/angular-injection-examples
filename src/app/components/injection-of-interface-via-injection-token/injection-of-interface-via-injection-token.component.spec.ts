import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionOfInterfaceViaInjectionTokenComponent } from './injection-of-interface-via-injection-token.component';

describe('InjectionOfInterfaceViaInjectionTokenComponent', () => {
  let component: InjectionOfInterfaceViaInjectionTokenComponent;
  let fixture: ComponentFixture<InjectionOfInterfaceViaInjectionTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjectionOfInterfaceViaInjectionTokenComponent]
    })
                 .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionOfInterfaceViaInjectionTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
