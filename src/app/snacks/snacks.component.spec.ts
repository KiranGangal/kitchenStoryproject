import { ComponentFixture, TestBed } from '@angular/core/testing';

import { snacksComponent } from './snacks.component';

describe('snacksComponent', () => {
  let component: snacksComponent;
  let fixture: ComponentFixture<snacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ snacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(snacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});