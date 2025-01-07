// import { API_ENDPOINTS } from 'src/app/vhs/core/api-endpoints/apiEndpoints';
// import { Actions } from 'src/app/vhs/shared/enums/common';

import { Validators } from '@angular/forms';
import { ACTIONS, FORM_CONSTANTS } from 'src/app/shared/utils/Constants';

const moduleName = 'Login';

export enum fieldLabels {
  email = 'Username/Email',
  password = 'Password',
}

export enum controlNames {
  email = 'email',
  password = 'password',
}

export const LOGIN_FORM_CONFIG = {
  formTitle: moduleName,
  formClass: 'card p-fluid',
  controlsClass: 'row',
  formControls: [
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.email,
      controlName: controlNames.email,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-12 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      validations: [Validators.required],
      // fieldClass: 'input-text',
      // id: string
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_PASSWORD_ID,
      fieldLabel: fieldLabels.password,
      controlName: controlNames.password,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-12 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      validations: [Validators.required],
      // iconClass: 'pi pi-key',
      // fieldClass: 'input-text ',
      // id: string
    },
  ],
  formActions: [
    {
      actionName: ACTIONS.LOGIN,
      actionTitle: ACTIONS.LOGIN_TITLE,
      buttonSelector: FORM_CONSTANTS.SELECTOR_BUTTON,
      validations: [controlNames.email, controlNames.password],
      // actionUrl?: string;
      // showToast?: true,
    },
    {
      actionName: ACTIONS.REGISTER,
      actionTitle: ACTIONS.REGISTER_TITLE,
      buttonSelector: FORM_CONSTANTS.SELECTOR_BUTTON,
      // actionUrl?: string;
      // showToast?: boolean;
    },
  ],
  formData: {},

  pagination: {},
};
