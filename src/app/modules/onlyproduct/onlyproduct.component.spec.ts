import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyproductComponent } from './onlyproduct.component';

describe('OnlyproductComponent', () => {
  let component: OnlyproductComponent;
  let fixture: ComponentFixture<OnlyproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
