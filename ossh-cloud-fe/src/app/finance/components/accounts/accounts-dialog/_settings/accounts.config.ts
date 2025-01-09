import { Validators } from '@angular/forms';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS, CONST, FORM_CONSTANTS } from 'src/app/shared/utils/Constants';

const moduleName = 'Account';

// FORM CONFIGURATION

export enum fieldLabels {
  title = 'Title',
  description = 'Description',
  personId = 'Person',
  bankId = 'Bank',
  iban = 'IBAN',
}

export enum controlNames {
  title = 'title',
  description = 'description',
  personId = 'personId',
  bankId = 'bankId',
  iban = 'iban',
  firstName = 'firstName',
}

export const ACCOUNT_FORM_CONFIG = {
  formTitle: moduleName,
  formClass: 'card p-fluid',
  controlsClass: 'row mb-3',
  formControls: [
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.title,
      controlName: controlNames.title,
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
      fieldLabel: fieldLabels.description,
      controlName: controlNames.description,
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
      controlId: FORM_CONSTANTS.CTRL_DROP_DOWN_ID,
      fieldLabel: fieldLabels.personId,
      controlName: controlNames.personId,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-4 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      validations: [Validators.required],
      valuesList: <any[]>[],
      dropDownValue: controlNames.personId,
      dropDownLabel: controlNames.firstName,
      // fieldClass: 'input-text',
      // id: string
      placeHolder: 'Select Person',
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_DROP_DOWN_ID,
      fieldLabel: fieldLabels.bankId,
      controlName: controlNames.bankId,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-4 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      validations: [Validators.required],
      valuesList: <any[]>[],
      dropDownValue: controlNames.bankId,
      dropDownLabel: controlNames.title,
      // fieldClass: 'input-text',
      // id: string
      placeHolder: 'Select Person',
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.iban,
      controlName: controlNames.iban,
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
        controlNames.title,
        controlNames.description,
        controlNames.personId,
        controlNames.bankId,
        controlNames.iban,
      ],
      actionUrl: API_ENDPOINTS.ACCOUNT_CREATE,
      showToast: true,
    },
  ],
  formData: {},

  pagination: {},
};
