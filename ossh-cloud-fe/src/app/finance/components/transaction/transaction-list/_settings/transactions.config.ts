// import { API_ENDPOINTS } from 'src/app/vhs/core/api-endpoints/apiEndpoints';
// import { Actions } from 'src/app/vhs/shared/enums/common';

import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS } from 'src/app/shared/utils/Constants';

const moduleName = 'Transactions';

export enum colHeaders {
  fromAccountId = 'From Account',
  toAccountId = 'To Account',
  amountTransfered = 'Amount Transferred',
  serviceCharges = 'Service Charges',
  taxCharges = 'Tax Charges',
  totalAmount = 'Total Amount',
}

export enum fieldNames {
  fromAccountId = 'fromAccountId',
  toAccountId = 'toAccountId',
  amountTransfered = 'amountTransfered',
  serviceCharges = 'serviceCharges',
  taxCharges = 'taxCharges',
  totalAmount = 'totalAmount',

  firstName = 'firstName',
  middleName = 'middleName',
  lastName = 'lastName',
}

export const TRANSACTIONS_TABLE_CONFIG = {
  tableTitle: moduleName,
  tableData: [],
  // endPoint?: string,
  tableColumns: [
    {
      field: fieldNames.fromAccountId,
      colHeader: colHeaders.fromAccountId,
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
      field: fieldNames.toAccountId,
      colHeader: colHeaders.toAccountId,
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.amountTransfered,
      colHeader: colHeaders.amountTransfered,
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
      field: fieldNames.serviceCharges,
      colHeader: colHeaders.serviceCharges,
      // nestedPath: 'bankId?.title',
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.taxCharges,
      colHeader: colHeaders.taxCharges,
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.totalAmount,
      colHeader: colHeaders.totalAmount,
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
  ],
  tableActions: [
    {
      actionName: ACTIONS.ADD,
      actionTitle: 'Add Transaction',
      actionUrl: API_ENDPOINTS.TRANSACTION_CREATE,
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
