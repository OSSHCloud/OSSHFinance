import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRolesDialogComponent } from './business-roles-dialog.component';

describe('BusinessRolesDialogComponent', () => {
  let component: BusinessRolesDialogComponent;
  let fixture: ComponentFixture<BusinessRolesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessRolesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessRolesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
