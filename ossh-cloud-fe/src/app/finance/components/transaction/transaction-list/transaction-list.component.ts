import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { TableConfig } from 'src/app/shared/models/table.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { TRANSACTIONS_TABLE_CONFIG } from './_settings/transactions.config';
import { ActionConfig, Pagination } from 'src/app/shared/models/common.model';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { TransactionDialogComponent } from '../transaction-dialog/transaction-dialog.component';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss',
})
export class TransactionListComponent {
  subscription: Subscription = new Subscription();
  constructor(
    private apiService: ApiService,
    private ref: DynamicDialogRef,
    private dialogService: DialogService,
    private alertService: AlertService
  ) {}
  tableConfig: TableConfig = new TableConfig(TRANSACTIONS_TABLE_CONFIG);
  transactionsList: any[] = [];
  totalCount: number = 0;
  pagination: Pagination = {};

  ngOnInit() {
    this.getAllTransactions();
  }

  // pageNo?: number;
  // itemsPerPage?: number;
  // totalCount?: number;
  // pagingOption?: number[];

  getAllTransactions() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.TRANSACTION_FIND_ALL, false)
      .subscribe((resp) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          this.transactionsList = ApiResponse.getData(resp);
          this.totalCount = ApiResponse.getTotalCount(resp);
          console.log(this.totalCount);
          this.pagination.totalCount = this.totalCount;
          this.sendDataToTable();
        } else {
          this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  sendDataToTable() {
    this.tableConfig.tableData = this.transactionsList;
    this.tableConfig.pagination = this.pagination;
  }

  onClick(event: ActionConfig) {
    this.ref = this.dialogService.open(TransactionDialogComponent, {
      data: {},
      header: event.actionTitle,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      styleClass: 'png-dialogbox',
      footer: '.',
    });
    this.subscription = this.ref.onClose.subscribe((data: any) => {
      if (data?.refresh) {
        this.getAllTransactions();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
