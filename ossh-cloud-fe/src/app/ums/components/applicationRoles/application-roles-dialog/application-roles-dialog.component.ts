import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormConfig } from 'src/app/shared/models/form.model';
import { ApiService } from 'src/app/shared/services/api.service';
import {
  APPLICATION_ROLES_FORM_CONFIG,
  controlNames,
} from './_settings/application-roles.config';
import { ACTIONS, API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-application-roles-dialog',
  templateUrl: './application-roles-dialog.component.html',
  styleUrls: ['./application-roles-dialog.component.scss'],
})
export class ApplicationRolesDialogComponent {
  subscription: Subscription = new Subscription();
  formConfig: FormConfig = new FormConfig();
  renderForm: boolean = false;

  // private alertService: AlertService
  // private loginService: LoginService,
  constructor(private apiService: ApiService, private ref: DynamicDialogRef) {
    // this.formConfig = new FormConfig(APPLICATION_ROLES_FORM_CONFIG);
  }

  ngOnInit() {
    this.getAllApplications();
  }

  getAllApplications() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.APPLICATION_FIND_ALL, false)
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          let applicationsList = ApiResponse.getData(resp);
          let newFormConfig = APPLICATION_ROLES_FORM_CONFIG;
          for (let control of newFormConfig.formControls) {
            if (control.controlName === controlNames.applicationId) {
              control.valuesList = applicationsList;
            }
          }
          this.formConfig = new FormConfig(newFormConfig);
          this.renderForm = true;
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
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
