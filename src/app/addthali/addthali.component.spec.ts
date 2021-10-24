import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddthaliComponent } from './addthali.component';

describe('AddthaliComponent', () => {
  let component: AddthaliComponent;
  let fixture: ComponentFixture<AddthaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddthaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddthaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});