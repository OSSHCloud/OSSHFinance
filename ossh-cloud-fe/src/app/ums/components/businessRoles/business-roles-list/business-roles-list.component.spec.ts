import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRolesListComponent } from './business-roles-list.component';

describe('BusinessRolesListComponent', () => {
  let component: BusinessRolesListComponent;
  let fixture: ComponentFixture<BusinessRolesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessRolesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessRolesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
