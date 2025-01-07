import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { AlertService } from './alert.service';
import { FE_URLS, LOGIN_CONSTANTS, UTS } from '../utils/Constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private sharedService: SharedService,
    private alertService: AlertService,
    private router: Router
  ) {}

  validateLoginResp(loginResp: any) {
    return new Promise<any>((resolve, reject) => {
      if (
        loginResp?.[UTS.userKey] &&
        loginResp?.[UTS.tokenKey] &&
        loginResp?.[UTS.caseKey]
      ) {
        resolve(true);
      } else {
        reject('Invalid login response');
      }
    });
  }

  saveRespToLocalStorage(loginResp: any) {
    localStorage.setItem(
      UTS.verificationKey,
      JSON.stringify({
        [UTS.userKey]: loginResp?.[UTS.userKey],
        [UTS.tokenKey]: loginResp?.[UTS.tokenKey],
        [UTS.caseKey]: loginResp?.[UTS.caseKey],
      })
    );
    // localStorage.setItem('token', loginResp?.token);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  async login(loginResp: any) {
    try {
      // validate login response
      await this.validateLoginResp(loginResp);
      // switch for cases
      switch (loginResp.case) {
        case LOGIN_CONSTANTS.CASE_VERIFIED:
          // save to localStorage and login
          this.saveRespToLocalStorage(loginResp);
          this.navigateTo(FE_URLS.HOME);
          break;
        case LOGIN_CONSTANTS.CASE_OTP:
          // save to localStorage and proceed for otp
          break;
        default:
          // invalid case error
          throw new Error('Invalid case');
      }
      this.sharedService.setIsLoggedIn(true);
    } catch (error: any) {
      this.alertService.showErrorAlert(error);
    }
  }

  validateOnRefresh() {
    let verification = UTS.getVerificationFromLocalStorage();
    if (verification) {
      this.sharedService.setIsLoggedIn(true);
    } else {
      // logout
      this.logout();
    }
  }

  logout() {
    localStorage.clear();
    this.sharedService.setIsLoggedIn(false);
    this.navigateTo(FE_URLS.LOGIN);
  }
}
