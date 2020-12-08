import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionWithUseValueComponent } from './injection-with-use-value.component';

describe('InjectionWithUseValueComponent', () => {
  let component: InjectionWithUseValueComponent;
  let fixture: ComponentFixture<InjectionWithUseValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjectionWithUseValueComponent]
    })
                 .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionWithUseValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
