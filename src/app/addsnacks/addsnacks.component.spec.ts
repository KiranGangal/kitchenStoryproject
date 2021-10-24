import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsnacksComponent } from './addsnacks.component';

describe('AddsnacksComponent', () => {
  let component: AddsnacksComponent;
  let fixture: ComponentFixture<AddsnacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsnacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});