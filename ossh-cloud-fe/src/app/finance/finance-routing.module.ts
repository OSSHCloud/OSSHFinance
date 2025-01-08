import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankListComponent } from './components/banks/bank-list/bank-list.component';
import { FE_URLS } from '../shared/utils/Constants';
import { AccountsListComponent } from './components/accounts/accounts-list/accounts-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'banks' },
  { path: 'banks', component: BankListComponent },
  { path: 'accounts', component: AccountsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceRoutingModule {}
