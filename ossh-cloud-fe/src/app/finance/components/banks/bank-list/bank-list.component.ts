import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TableConfig } from 'src/app/shared/models/table.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { BANKS_TABLE_CONFIG } from './_settings/banks.config';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { ActionConfig, Pagination } from 'src/app/shared/models/common.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BankDialogComponent } from '../bank-dialog/bank-dialog.component';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrl: './bank-list.component.scss',
})
export class BankListComponent {
  subscription: Subscription = new Subscription();
  constructor(
    private apiService: ApiService,
    private ref: DynamicDialogRef,
    private dialogService: DialogService,
    private alertService: AlertService
  ) {}
  tableConfig: TableConfig = new TableConfig(BANKS_TABLE_CONFIG);
  banksList: any[] = [];
  totalCount: number = 0;
  pagination: Pagination = {};

  ngOnInit() {
    this.getAllBanks();
  }

  // pageNo?: number;
  // itemsPerPage?: number;
  // totalCount?: number;
  // pagingOption?: number[];

  getAllBanks() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.BANK_FIND_ALL, false)
      .subscribe((resp) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          this.banksList = ApiResponse.getData(resp);
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
    this.tableConfig.tableData = this.banksList;
    this.tableConfig.pagination = this.pagination;
  }

  onClick(event: ActionConfig) {
    this.ref = this.dialogService.open(BankDialogComponent, {
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
        this.getAllBanks();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
