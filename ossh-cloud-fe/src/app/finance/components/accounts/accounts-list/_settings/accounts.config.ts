// import { API_ENDPOINTS } from 'src/app/vhs/core/api-endpoints/apiEndpoints';
// import { Actions } from 'src/app/vhs/shared/enums/common';

import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS } from 'src/app/shared/utils/Constants';

const moduleName = 'Accounts';

export enum colHeaders {
  title = 'Title',
  description = 'Description',
  personId = 'Person',
  bankId = 'Bank',
  iban = 'IBAN',
}

export enum fieldNames {
  title = 'title',
  description = 'description',
  personId = 'personId',
  bankId = 'bankId',
  iban = 'iban',

  firstName = 'firstName',
  middleName = 'middleName',
  lastName = 'lastName',
}

export const ACCOUNTS_TABLE_CONFIG = {
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
      field: fieldNames.personId,
      colHeader: colHeaders.personId,
      multiplePaths: [
        'personId?.firstName',
        'personId?.middleName',
        'personId?.lastName',
      ],
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.bankId,
      colHeader: colHeaders.bankId,
      nestedPath: 'bankId?.title',
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.iban,
      colHeader: colHeaders.iban,
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
  ],
  tableActions: [
    {
      actionName: ACTIONS.ADD,
      actionTitle: 'Add Account',
      actionUrl: API_ENDPOINTS.ACCOUNT_CREATE,
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
