import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { TableConfig } from 'src/app/shared/models/table.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { APPLICATION_ROLES_TABLE_CONFIG } from './_settings/application-roles.config';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { ActionConfig } from 'src/app/shared/models/common.model';
import { ApplicationRolesDialogComponent } from '../application-roles-dialog/application-roles-dialog.component';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-application-roles-list',
  templateUrl: './application-roles-list.component.html',
  styleUrls: ['./application-roles-list.component.scss'],
})
export class ApplicationRolesListComponent {
  subscription: Subscription = new Subscription();
  constructor(
    private apiService: ApiService,
    private ref: DynamicDialogRef,
    private dialogService: DialogService,
    private alertService: AlertService
  ) {}

  tableDate: TableConfig = new TableConfig(APPLICATION_ROLES_TABLE_CONFIG);

  ngOnInit() {
    this.getAllApplicationRoles();
  }

  getAllApplicationRoles() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.APPLICATION_ROLES_FIND_ALL, false)
      .subscribe((resp) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          this.tableDate.tableData = ApiResponse.getData(resp);
        } else {
          this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  onClick(event: ActionConfig) {
    this.ref = this.dialogService.open(ApplicationRolesDialogComponent, {
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
        this.getAllApplicationRoles();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
