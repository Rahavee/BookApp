import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeetsComponent } from './employee-deets.component';

describe('EmployeeDeetsComponent', () => {
  let component: EmployeeDeetsComponent;
  let fixture: ComponentFixture<EmployeeDeetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDeetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
