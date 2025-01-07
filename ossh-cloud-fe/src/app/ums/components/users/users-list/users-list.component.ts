import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { USERS_TABLE_CONFIG } from './_settings/users.config';
import { TableConfig } from 'src/app/shared/models/table.model';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  subscription: Subscription = new Subscription();
  constructor(
    private apiService: ApiService,
    private alertService: AlertService
  ) {}
  tableDate: TableConfig = new TableConfig(USERS_TABLE_CONFIG);

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.USER_FIND_ALL, false)
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
