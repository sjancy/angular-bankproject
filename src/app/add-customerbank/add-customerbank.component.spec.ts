import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerbankComponent } from './add-customerbank.component';

describe('AddCustomerbankComponent', () => {
  let component: AddCustomerbankComponent;
  let fixture: ComponentFixture<AddCustomerbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomerbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
