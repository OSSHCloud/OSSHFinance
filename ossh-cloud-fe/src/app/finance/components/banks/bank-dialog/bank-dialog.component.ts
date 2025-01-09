import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { FormConfig } from 'src/app/shared/models/form.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS, API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { BANK_FORM_CONFIG, controlNames } from './_settings/banks.config';

@Component({
  selector: 'app-bank-dialog',
  templateUrl: './bank-dialog.component.html',
  styleUrl: './bank-dialog.component.scss',
})
export class BankDialogComponent {
  subscription: Subscription = new Subscription();
  formConfig: FormConfig = new FormConfig();
  renderForm: boolean = false;

  countriesList: any[] = [];

  constructor(private apiService: ApiService, private ref: DynamicDialogRef) {}

  ngOnInit() {
    this.getAllOrganizations();
  }

  getAllOrganizations() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.COUNTRY_FIND_ALL, false)
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          this.countriesList = ApiResponse.getData(resp);
          this.initializeFormConfig();
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  initializeFormConfig() {
    let newFormConfig = BANK_FORM_CONFIG;
    for (let control of newFormConfig.formControls) {
      if (control.controlName === controlNames.countryId) {
        control.valuesList = this.countriesList;
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
