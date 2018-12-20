import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegDoctorComponent } from './reg-doctor.component';

describe('RegDoctorComponent', () => {
  let component: RegDoctorComponent;
  let fixture: ComponentFixture<RegDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
