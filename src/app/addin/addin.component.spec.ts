import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinComponent } from './addin.component';

describe('AddinComponent', () => {
  let component: AddinComponent;
  let fixture: ComponentFixture<AddinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});