import { Validators } from '@angular/forms';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS, CONST, FORM_CONSTANTS } from 'src/app/shared/utils/Constants';

const moduleName = 'Account';

// FORM CONFIGURATION

export enum fieldLabels {
  fromAccountId = 'From Account',
  toAccountId = 'To Account',
  amountTransfered = 'Amount Transferred',
  serviceCharges = 'Service Charges',
  taxCharges = 'Tax Charges',
  totalAmount = 'Total Amount',
}

export enum controlNames {
  fromAccountId = 'fromAccountId',
  toAccountId = 'toAccountId',
  amountTransfered = 'amountTransfered',
  serviceCharges = 'serviceCharges',
  taxCharges = 'taxCharges',
  totalAmount = 'totalAmount',

  accountId = 'accountId',
  title = 'title',
}

export const TRANSACTIONS_FORM_CONFIG = {
  formTitle: moduleName,
  formClass: 'card p-fluid',
  controlsClass: 'row mb-3',
  formControls: [
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_DROP_DOWN_ID,
      fieldLabel: fieldLabels.fromAccountId,
      controlName: controlNames.fromAccountId,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-4 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      validations: [Validators.required],
      valuesList: <any[]>[],
      dropDownValue: controlNames.accountId,
      dropDownLabel: controlNames.title,
      // fieldClass: 'input-text',
      // id: string
      placeHolder: 'Select Person',
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_DROP_DOWN_ID,
      fieldLabel: fieldLabels.toAccountId,
      controlName: controlNames.toAccountId,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-4 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      validations: [Validators.required],
      valuesList: <any[]>[],
      dropDownValue: controlNames.accountId,
      dropDownLabel: controlNames.title,
      // fieldClass: 'input-text',
      // id: string
      placeHolder: 'Select Person',
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.amountTransfered,
      controlName: controlNames.amountTransfered,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-4 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      validations: [Validators.required],
      // fieldClass: 'input-text',
      // id: string
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.amountTransfered,
      controlName: controlNames.amountTransfered,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-4 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      validations: [Validators.required],
      // fieldClass: 'input-text',
      // id: string
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.serviceCharges,
      controlName: controlNames.serviceCharges,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-4 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      validations: [Validators.required],
      // fieldClass: 'input-text',
      // id: string
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.taxCharges,
      controlName: controlNames.taxCharges,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-4 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      validations: [Validators.required],
      // fieldClass: 'input-text',
      // id: string
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.totalAmount,
      controlName: controlNames.totalAmount,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-4 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      validations: [Validators.required],
      // fieldClass: 'input-text',
      // id: string
    },
    // {
    //   fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
    //   controlId: FORM_CONSTANTS.CTRL_RADIO_ID,
    //   fieldLabel: fieldLabels.lovStatusId,
    //   controlName: controlNames.lovStatusId,
    //   valuesList: [
    //     { key: 'active', value: CONST.LID_ACTIVE_ID, label: 'Active' },
    //     { key: 'inactive', value: CONST.LID_INACTIVE_ID, label: 'In Active' },
    //   ],
    //   // nestedPath?: string;
    //   // onChange?: boolean;
    //   showIcon: true,
    //   outerClass: 'col-md-4 form-field-container',
    //   labelClass: 'form-field-label',
    //   spanClass: 'p-input-icon-right',
    //   iconClass: 'pi pi-user',
    //   validations: [Validators.required],
    //   // fieldClass: 'input-text',
    //   // id: string
    // },
  ],
  formActions: [
    {
      actionName: ACTIONS.ADD,
      actionTitle: ACTIONS.ADD_TITLE,
      buttonSelector: FORM_CONSTANTS.SELECTOR_BUTTON,
      validations: [
        controlNames.fromAccountId,
        controlNames.toAccountId,
        controlNames.amountTransfered,
        controlNames.serviceCharges,
        controlNames.taxCharges,
        controlNames.totalAmount,
      ],
      actionUrl: API_ENDPOINTS.TRANSACTION_CREATE,
      showToast: true,
    },
  ],
  formData: {},

  pagination: {},
};
