import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { BankListComponent } from './components/banks/bank-list/bank-list.component';
import { BankDialogComponent } from './components/banks/bank-dialog/bank-dialog.component';
import { AccountsDialogComponent } from './components/accounts/accounts-dialog/accounts-dialog.component';
import { AccountsListComponent } from './components/accounts/accounts-list/accounts-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BankListComponent,
    BankDialogComponent,
    AccountsDialogComponent,
    AccountsListComponent,
  ],
  imports: [CommonModule, FinanceRoutingModule, SharedModule],
})
export class FinanceModule {}
