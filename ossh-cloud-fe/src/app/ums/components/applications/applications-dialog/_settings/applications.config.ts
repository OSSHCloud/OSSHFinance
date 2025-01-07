import { Validators } from '@angular/forms';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS, CONST, FORM_CONSTANTS } from 'src/app/shared/utils/Constants';

const moduleName = 'Applications';

// FORM CONFIGURATION

export enum fieldLabels {
  organizationId = 'Organization',
  title = 'Title',
  description = 'Description',
  lovStatusId = 'Status',
}

export enum controlNames {
  organizationId = 'organizationId',
  title = 'title',
  description = 'description',
  lovStatusId = 'lovStatusId',
}

export const APPLICATION_FORM_CONFIG = {
  formTitle: moduleName,
  formClass: 'card p-fluid',
  controlsClass: 'row mb-3',
  formControls: [
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_DROP_DOWN_ID,
      fieldLabel: fieldLabels.organizationId,
      controlName: controlNames.organizationId,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-4 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      validations: [Validators.required],
      valuesList: [],
      dropDownValue: controlNames.organizationId,
      dropDownLabel: controlNames.title,
      // fieldClass: 'input-text',
      // id: string
      placeHolder: 'Select Application',
    },
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
      controlId: FORM_CONSTANTS.CTRL_RADIO_ID,
      fieldLabel: fieldLabels.lovStatusId,
      controlName: controlNames.lovStatusId,
      valuesList: [
        { key: 'active', value: CONST.LID_ACTIVE_ID, label: 'Active' },
        { key: 'inactive', value: CONST.LID_INACTIVE_ID, label: 'In Active' },
      ],
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
  ],
  formActions: [
    {
      actionName: ACTIONS.ADD,
      actionTitle: ACTIONS.ADD_TITLE,
      buttonSelector: FORM_CONSTANTS.SELECTOR_BUTTON,
      validations: [
        controlNames.title,
        controlNames.description,
        controlNames.lovStatusId,
      ],
      actionUrl: API_ENDPOINTS.APPLICATION_CREATE,
      showToast: true,
    },
  ],
  formData: {},

  pagination: {},
};
