import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaliComponent } from './thali.component';

describe('thaliComponent', () => {
  let component: ThaliComponent;
  let fixture: ComponentFixture<ThaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});