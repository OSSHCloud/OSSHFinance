// import { API_ENDPOINTS } from 'src/app/vhs/core/api-endpoints/apiEndpoints';
// import { Actions } from 'src/app/vhs/shared/enums/common';

import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import {
  ACTIONS,
  FE_URLS,
  FORM_CONSTANTS,
} from 'src/app/shared/utils/Constants';

const moduleName = 'Banks';

export enum colHeaders {
  title = 'Title',
  description = 'Description',
  ibanCode = 'Iban Code',
  country = 'Country',
  bankCode = 'Bank Code',
}

export enum fieldNames {
  title = 'title',
  description = 'description',
  ibanCode = 'ibanCode',
  country = 'countryId',
  bankCode = 'code',

  firstName = 'firstName',
  middleName = 'middleName',
  lastName = 'lastName',
}

export const BANKS_TABLE_CONFIG = {
  tableTitle: moduleName,
  tableData: [],
  // endPoint?: string,
  tableColumns: [
    {
      field: fieldNames.title,
      colHeader: colHeaders.title,
      // multiplePaths: [
      //   fieldNames.firstName,
      //   fieldNames.middleName,
      //   fieldNames.lastName,
      // ],
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.description,
      colHeader: colHeaders.description,
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.bankCode,
      colHeader: colHeaders.bankCode,
      // nestedPath: 'lovStatusId.title',
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.ibanCode,
      colHeader: colHeaders.ibanCode,
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.country,
      colHeader: colHeaders.country,
      nestedPath: 'countryId.title',
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
  ],
  tableActions: [
    {
      actionName: ACTIONS.ADD,
      actionTitle: 'Add Bank',
      actionUrl: API_ENDPOINTS.BANK_CREATE,
      // visibleInActionMenu: true,
      showToast: true,
    },
  ],
  // rowActions?: ActionConfig[],
  pagination: {},

  // formTitle: moduleName,
  // formClass: 'card p-fluid',
  // controlsClass: 'row',
  // formControls: [
  //   {
  //     fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
  //     controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
  //     fieldLabel: fieldLabels.email,
  //     controlName: controlNames.email,
  //     // nestedPath?: string;
  //     // onChange?: boolean;
  //     showIcon: true,
  //     outerClass: 'col-md-12 form-field-container',
  //     labelClass: 'form-field-label',
  //     spanClass: 'p-input-icon-right',
  //     iconClass: 'pi pi-user',
  //     // fieldClass: 'input-text',
  //     // id: string
  //   },
  //   {
  //     fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
  //     controlId: FORM_CONSTANTS.CTRL_PASSWORD_ID,
  //     fieldLabel: fieldLabels.password,
  //     controlName: controlNames.password,
  //     // nestedPath?: string;
  //     // onChange?: boolean;
  //     showIcon: true,
  //     outerClass: 'col-md-12 form-field-container',
  //     labelClass: 'form-field-label',
  //     spanClass: 'p-input-icon-right',
  //     // iconClass: 'pi pi-key',
  //     // fieldClass: 'input-text ',
  //     // id: string
  //   },
  // ],
  // formActions: [
  //   {
  //     actionName: ACTIONS.LOGIN,
  //     actionTitle: ACTIONS.LOGIN_TITLE,
  //     buttonSelector: FORM_CONSTANTS.SELECTOR_BUTTON,
  //     // actionUrl?: string;
  //     // showToast?: true,
  //   },
  //   {
  //     actionName: ACTIONS.REGISTER,
  //     actionTitle: ACTIONS.REGISTER_TITLE,
  //     buttonSelector: FORM_CONSTANTS.SELECTOR_BUTTON,
  //     // actionUrl?: string;
  //     // showToast?: boolean;
  //   },
  // ],
  // formData: {},

  // pagination: {},
};
