import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyInjectionComponent } from './easy-injection.component';

describe('EasyInjectionComponent', () => {
  let component: EasyInjectionComponent;
  let fixture: ComponentFixture<EasyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EasyInjectionComponent]
    })
                 .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
