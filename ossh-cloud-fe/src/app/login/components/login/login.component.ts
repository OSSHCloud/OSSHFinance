import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormConfig } from 'src/app/shared/models/form.model';
import { LOGIN_FORM_CONFIG } from './_settings/login.config';
import {
  ACTIONS,
  API_STATUS_CODE,
  FE_URLS,
} from 'src/app/shared/utils/Constants';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { LoginService } from 'src/app/shared/services/login.service';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  formConfig: FormConfig;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private loginService: LoginService,
    private alertService: AlertService
  ) {
    this.formConfig = new FormConfig(LOGIN_FORM_CONFIG);
  }

  ngOnInit() {}

  onAction(event: any) {
    if (event?.action?.actionName === ACTIONS.LOGIN) {
      this.login(event);
    } else if (event?.action?.actionName === ACTIONS.REGISTER) {
      this.router.navigate([FE_URLS.REGISTER]);
    }
  }

  login(obj: any) {
    this.subscription = this.apiService
      .call(obj?.data, {}, API_ENDPOINTS.LOGIN, false)
      .subscribe((resp) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          this.loginService.login(ApiResponse.getData(resp));
        } else {
          this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
