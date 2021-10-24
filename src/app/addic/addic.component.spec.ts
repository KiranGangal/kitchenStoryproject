import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddicComponent } from './addic.component';

describe('AddicComponent', () => {
  let component: AddicComponent;
  let fixture: ComponentFixture<AddicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});