import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreImgInDbComponent } from './store-img-in-db.component';

describe('StoreImgInDbComponent', () => {
  let component: StoreImgInDbComponent;
  let fixture: ComponentFixture<StoreImgInDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreImgInDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreImgInDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
