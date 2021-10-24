import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdpwdComponent } from './adpwd.component';

describe('AdpwdComponent', () => {
  let component: AdpwdComponent;
  let fixture: ComponentFixture<AdpwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdpwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});