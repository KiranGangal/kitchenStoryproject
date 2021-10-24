import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbreakfastComponent } from './addbreakfast.component';

describe('AddbreakfastComponent', () => {
  let component: AddbreakfastComponent;
  let fixture: ComponentFixture<AddbreakfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbreakfastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});