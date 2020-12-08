import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionViaFactoryComponent } from './injection-via-factory.component';

describe('InjectionViaFactoryComponent', () => {
  let component: InjectionViaFactoryComponent;
  let fixture: ComponentFixture<InjectionViaFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjectionViaFactoryComponent]
    })
                 .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionViaFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
