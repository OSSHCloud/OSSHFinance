import { LoginService } from 'src/app/shared/services/login.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiActions, ApiPayload, ApiResponse } from '../models/api.model';
import { catchError, Observable, ObservableInput, tap, throwError } from 'rxjs';
import { API_BASE_URL } from '../utils/ApiEndpoints';
import { AlertService } from './alert.service';
import { LOGIN_CONSTANTS } from '../utils/Constants';
import { Pagination } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements ApiActions {
  constructor(
    private myHttpClient: HttpClient,
    private alertService: AlertService,
    private LoginServic: LoginService
  ) {}

  errorHandler = (error: HttpErrorResponse) => {
    let errorMessage = '';
    if (!navigator.onLine) {
      errorMessage = 'Connection Error';
    } else {
      this.alertService.showErrorAlert(
        error?.error?.message || 'An unexpected error occurred!'
      );
      errorMessage = 'An unexpected error occurred!';
      // return throwError('Error : Server Error');
    }
    if (error?.error?.name === LOGIN_CONSTANTS.JWT_ERROR) {
      this.LoginServic.logout();
    }
    return throwError(errorMessage);
  };

  post(url: string, data: any, showToast?: boolean) {
    return this.myHttpClient.post<any>(url, data).pipe(
      tap((res: ApiResponse) => {
        if (showToast) {
          this.alertService.checkToast(res, showToast);
        }
      }),
      catchError(this.errorHandler)
    );
  }

  public call(
    obj: Object,
    pagination: Pagination,
    actionUrl: string,
    showToast: boolean
  ) {
    return this.post(
      `${API_BASE_URL}${actionUrl}`,
      ApiPayload.payload(obj, pagination),
      showToast
    );
  }
}
