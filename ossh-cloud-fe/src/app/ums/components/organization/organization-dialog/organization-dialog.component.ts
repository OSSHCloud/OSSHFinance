import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { FormConfig } from 'src/app/shared/models/form.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS, API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { ORGANIZATION_FORM_CONFIG } from './_settings/organization.config';

@Component({
  selector: 'app-organization-dialog',
  templateUrl: './organization-dialog.component.html',
  styleUrls: ['./organization-dialog.component.scss'],
})
export class OrganizationDialogComponent {
  subscription: Subscription = new Subscription();
  formConfig: FormConfig = new FormConfig(ORGANIZATION_FORM_CONFIG);
  action: any = undefined;

  // private alertService: AlertService
  // private loginService: LoginService,
  constructor(
    private apiService: ApiService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
    // this.formConfig = new FormConfig(APPLICATION_ROLES_FORM_CONFIG);
  }

  ngOnInit() {
    this.action = this.config.data;
    if (this.action.actionName === ACTIONS.ADD) {
      // this.getAllApplications();
    }
    // else if (this.action.actionName === ACTIONS.LINK_UNLINK) {
    //   this.getLinkedUnlinkedApplicationRoles();
    // }
  }

  // getAllApplications() {
  //   this.subscription = this.apiService
  //     .call({}, {}, API_ENDPOINTS.APPLICATION_FIND_ALL, false)
  //     .subscribe((resp: any) => {
  //       if (resp.statusCode === API_STATUS_CODE.OK) {
  //         let applicationsList = ApiResponse.getData(resp);
  //         let newFormConfig = BUSINESS_ROLES_FORM_CONFIG;
  //         for (let control of newFormConfig.formControls) {
  //           if (control.controlName === controlNames.applicationId) {
  //             control.valuesList = applicationsList;
  //           }
  //         }
  //         this.formConfig = new FormConfig(newFormConfig);
  //         this.renderForm = true;
  //       } else {
  //         // this.alertService.showErrorAlert(resp?.message);
  //       }
  //     });
  // }

  onAction(event: any) {
    if (event?.action?.actionName === ACTIONS.ADD) {
      this.add(event);
    } else if (event?.action?.actionName === ACTIONS.EDIT) {
      // this.update()
    } else if (event?.action?.actionName === ACTIONS.DELETE) {
      // this.delete()
    }
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
