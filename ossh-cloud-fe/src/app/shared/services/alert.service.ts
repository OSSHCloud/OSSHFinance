import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { API_STATUS_CODE } from '../utils/Constants';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private subject = new Subject<any>();
  subject$ = this.subject.asObservable();

  constructor() {}

  checkToast(response: any, showToast: boolean) {
    if (showToast) {
      if (
        response?.statusCode === API_STATUS_CODE.OK ||
        response?.statusCode === API_STATUS_CODE.CREATED
      ) {
        this.showSuccessAlert(response?.message);
      } else {
        this.showErrorAlert(response?.message);
      }
    }
  }

  showToaster(
    victim: any,
    operationType: any,
    resulttype: any,
    alertType: any
  ) {
    if (alertType == 'normal') {
      if (resulttype == 'success') {
        this.subject.next({
          victim,
          operationType,
          resulttype,
          alertType,
          detail:
            'Your ' +
            operationType +
            ' request for ' +
            victim +
            ' is completed successfully.',
        });
      }
      if (resulttype == 'error') {
        this.subject.next({
          victim,
          operationType,
          resulttype,
          alertType,
          detail:
            'Your ' + operationType + ' request for ' + victim + ' is failed .',
        });
      }
    } else {
      if (resulttype == 'success') {
        this.subject.next({
          victim,
          operationType,
          resulttype,
          alertType,
          detail: operationType,
        });
      }
      if (resulttype == 'error') {
        this.subject.next({
          victim,
          operationType,
          resulttype,
          alertType,
          detail: operationType,
        });
      }
      if (resulttype == 'info') {
        this.subject.next({
          victim,
          operationType,
          resulttype,
          alertType,
          detail: operationType,
        });
      }
    }
  }

  showSuccessAlert(message: string) {
    this.showToaster('', message, 'success', 'custom');
  }

  showErrorAlert(message: string) {
    this.showToaster('', message, 'error', 'custom');
  }
  showInfoAlert(message: string) {
    this.showToaster('', message, 'info', 'custom');
  }
}
