import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRolesDialogComponent } from './application-roles-dialog.component';

describe('ApplicationRolesDialogComponent', () => {
  let component: ApplicationRolesDialogComponent;
  let fixture: ComponentFixture<ApplicationRolesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationRolesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationRolesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
