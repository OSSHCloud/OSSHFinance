import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { BankListComponent } from './components/banks/bank-list/bank-list.component';
import { BankDialogComponent } from './components/banks/bank-dialog/bank-dialog.component';
import { AccountsDialogComponent } from './components/accounts/accounts-dialog/accounts-dialog.component';
import { AccountsListComponent } from './components/accounts/accounts-list/accounts-list.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionListComponent } from './components/transaction/transaction-list/transaction-list.component';
import { TransactionDialogComponent } from './components/transaction/transaction-dialog/transaction-dialog.component';

@NgModule({
  declarations: [
    BankListComponent,
    BankDialogComponent,
    AccountsDialogComponent,
    AccountsListComponent,
    TransactionListComponent,
    TransactionDialogComponent,
  ],
  imports: [CommonModule, FinanceRoutingModule, SharedModule],
})
export class FinanceModule {}
