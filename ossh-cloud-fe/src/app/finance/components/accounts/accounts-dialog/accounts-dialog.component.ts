import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { FormConfig } from 'src/app/shared/models/form.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS, API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { ACCOUNT_FORM_CONFIG, controlNames } from './_settings/accounts.config';

@Component({
  selector: 'app-accounts-dialog',
  templateUrl: './accounts-dialog.component.html',
  styleUrl: './accounts-dialog.component.scss',
})
export class AccountsDialogComponent {
  subscription: Subscription = new Subscription();
  formConfig: FormConfig = new FormConfig();
  renderForm: boolean = false;

  personList: any[] = [];
  banksList: any[] = [];

  constructor(private apiService: ApiService, private ref: DynamicDialogRef) {}

  ngOnInit() {
    this.getAllPerson();
    this.getAllBanks();
  }

  getAllPerson() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.PERSON_FIND_ALL, false)
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          this.personList = ApiResponse.getData(resp);
          this.initializeFormConfig();
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  getAllBanks() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.BANK_FIND_ALL, false)
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          this.banksList = ApiResponse.getData(resp);
          this.initializeFormConfig();
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  initializeFormConfig() {
    let newFormConfig = ACCOUNT_FORM_CONFIG;
    for (let control of newFormConfig.formControls) {
      if (control.controlName === controlNames.personId) {
        control.valuesList = this.personList;
      }
      if (control.controlName === controlNames.bankId) {
        control.valuesList = this.banksList;
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
