import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { FormConfig } from 'src/app/shared/models/form.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS, API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import {
  controlNames,
  TRANSACTIONS_FORM_CONFIG,
} from './_settings/transactions.config';

@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrl: './transaction-dialog.component.scss',
})
export class TransactionDialogComponent {
  subscription: Subscription = new Subscription();
  formConfig: FormConfig = new FormConfig();
  renderForm: boolean = false;

  accountsList: any[] = [];

  constructor(private apiService: ApiService, private ref: DynamicDialogRef) {}

  ngOnInit() {
    this.getAllAccounts();
  }

  getAllAccounts() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.ACCOUNT_FIND_ALL, false)
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          this.accountsList = ApiResponse.getData(resp);
          this.initializeFormConfig();
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  initializeFormConfig() {
    let newFormConfig = TRANSACTIONS_FORM_CONFIG;
    for (let control of newFormConfig.formControls) {
      if (
        control.controlName === controlNames.toAccountId ||
        control.controlName === controlNames.fromAccountId
      ) {
        control.valuesList = this.accountsList;
      }
    }
    this.formConfig = new FormConfig(newFormConfig);
    this.renderForm = true;
  }

  onAction(event: any) {
    if (event?.action?.actionName === ACTIONS.ADD) {
      this.add(event);
    } else if (event?.action?.actionName === ACTIONS.EDIT) {
      // this.update()
    } else if (event?.action?.actionName === ACTIONS.DELETE) {
      // this.delete()
    }
    // if (event?.action?.actionName === ACTIONS.LOGIN) {
    //   this.login(event);
    // } else if (event?.action?.actionName === ACTIONS.REGISTER) {
    //   this.router.navigate([FE_URLS.REGISTER]);
    // }
  }

  add(obj: any) {
    this.subscription = this.apiService
      .call(obj?.data, {}, obj.action?.actionUrl, obj.action.show)
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          this.ref.close({ refresh: true });
          // this.loginService.login(ApiResponse.getData(resp));
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
