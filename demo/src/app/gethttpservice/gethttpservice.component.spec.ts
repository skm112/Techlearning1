import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GethttpserviceComponent } from './gethttpservice.component';

describe('GethttpserviceComponent', () => {
  let component: GethttpserviceComponent;
  let fixture: ComponentFixture<GethttpserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GethttpserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GethttpserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
