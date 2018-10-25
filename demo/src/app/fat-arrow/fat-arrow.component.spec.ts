import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatArrowComponent } from './fat-arrow.component';

describe('FatArrowComponent', () => {
  let component: FatArrowComponent;
  let fixture: ComponentFixture<FatArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
