import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyInjectionWithProviderComponent } from './easy-injection-with-provider.component';

describe('EasyInjectionWithProviderComponent', () => {
  let component: EasyInjectionWithProviderComponent;
  let fixture: ComponentFixture<EasyInjectionWithProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EasyInjectionWithProviderComponent]
    })
                 .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyInjectionWithProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
