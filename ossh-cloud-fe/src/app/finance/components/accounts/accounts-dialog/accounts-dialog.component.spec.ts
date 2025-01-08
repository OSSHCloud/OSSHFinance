import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsDialogComponent } from './accounts-dialog.component';

describe('AccountsDialogComponent', () => {
  let component: AccountsDialogComponent;
  let fixture: ComponentFixture<AccountsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
