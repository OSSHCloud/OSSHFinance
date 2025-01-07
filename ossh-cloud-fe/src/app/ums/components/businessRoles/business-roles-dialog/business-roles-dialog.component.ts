import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { FormConfig } from 'src/app/shared/models/form.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS, API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import {
  BUSINESS_ROLES_FORM_CONFIG,
  controlNames,
} from './_settings/business-roles.config';

@Component({
  selector: 'app-business-roles-dialog',
  templateUrl: './business-roles-dialog.component.html',
  styleUrls: ['./business-roles-dialog.component.scss'],
})
export class BusinessRolesDialogComponent {
  subscription: Subscription = new Subscription();
  formConfig: FormConfig = new FormConfig();
  renderForm: boolean = false;
  action: any = undefined;
  applicationRolesList: any[] = [];
  renderLinkUnlinkForm: boolean = false;

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
      this.getAllApplications();
    } else if (this.action.actionName === ACTIONS.LINK_UNLINK) {
      this.getLinkedUnlinkedApplicationRoles();
    }
  }

  getAllApplications() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.APPLICATION_FIND_ALL, false)
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          let applicationsList = ApiResponse.getData(resp);
          let newFormConfig = BUSINESS_ROLES_FORM_CONFIG;
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

  getLinkedUnlinkedApplicationRoles() {
    let payload = {
      businessRoleId: this.action.data.businessRoleId,
      applicationId: this.action.data.applicationId.applicationId,
    };
    this.subscription = this.apiService
      .call(
        payload,
        {},
        API_ENDPOINTS.APPLICATION_ROLES_FIND_ALL_LINKED_UNLINKED,
        false
      )
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          this.applicationRolesList = ApiResponse.getData(resp);
          this.renderLinkUnlinkForm = true;
          // for (let control of newFormConfig.formControls) {
          //   if (control.controlName === controlNames.applicationId) {
          //     control.valuesList = applicationsList;
          //   }
          // }
          // this.formConfig = new FormConfig(newFormConfig);
          // this.renderForm = true;
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  onChange(event: any, applicationRole: any) {
    if (event?.checked) {
      this.link(applicationRole);
    } else {
      this.unlink(applicationRole);
    }
  }

  link(applicationRole: any) {
    let payload = {
      applicationId: this.action.data?.applicationId?.applicationId,
      applicationRoleId: applicationRole?.application_role_id,
      businessRoleId: this.action.data.businessRoleId,
    };
    this.subscription = this.apiService
      .call(payload, {}, API_ENDPOINTS.BUSINESS_APPLICATION_ROLES_CREATE, true)
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          // this.applicationRolesList = ApiResponse.getData(resp);
          // this.renderLinkUnlinkForm = true;
          // for (let control of newFormConfig.formControls) {
          //   if (control.controlName === controlNames.applicationId) {
          //     control.valuesList = applicationsList;
          //   }
          // }
          // this.formConfig = new FormConfig(newFormConfig);
          // this.renderForm = true;
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  unlink(applicationRole: any) {
    let payload = {
      businessApplicationRoleId: applicationRole?.business_application_role_id,
    };
    this.subscription = this.apiService
      .call(payload, {}, API_ENDPOINTS.BUSINESS_APPLICATION_ROLES_DELETE, true)
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
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
