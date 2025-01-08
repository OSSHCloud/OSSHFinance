import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TableConfig } from 'src/app/shared/models/table.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { BANKS_TABLE_CONFIG } from './_settings/banks.config';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { ApiResponse } from 'src/app/shared/models/api.model';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrl: './bank-list.component.scss',
})
export class BankListComponent {
  subscription: Subscription = new Subscription();
  constructor(
    private apiService: ApiService,
    private alertService: AlertService
  ) {}
  tableDate: TableConfig = new TableConfig(BANKS_TABLE_CONFIG);

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.BANK_FIND_ALL, false)
      .subscribe((resp) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          this.tableDate.tableData = ApiResponse.getData(resp);
        } else {
          this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
