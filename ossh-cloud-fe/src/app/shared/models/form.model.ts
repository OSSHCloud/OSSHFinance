import { Validator } from '@angular/forms';
import { ActionConfig, Pagination } from './common.model';

export class FormConfig {
  formTitle: string;
  formData: any;
  formClass: string;
  controlsClass: string;
  formControls: FormControls[];
  formActions?: ActionConfig[];
  pagination?: Pagination;

  constructor(params?: any) {
    params = Object.assign({}, params);
    this.formControls = [];
    this.formActions = [];
    this.formTitle =
      params.formTitle === void 0 ? 'Form Title' : params.formTitle;
    this.formClass = params.formClass === void 0 ? '' : params.formClass;
    this.controlsClass =
      params.controlsClass === void 0 ? 'row' : params.controlsClass;
    this.formData = params?.formData || [];
    this.pagination = new Pagination(params.pagination);
    const formCtrls =
      params.formControls === void 0 ? [] : [...params.formControls];
    const formActs =
      params.formActions === void 0 ? [] : [...params.formActions];

    if (formCtrls.length > 0) {
      formCtrls.forEach((ctrl: any) => {
        this.formControls.push(new FormControls(ctrl));
      });
    }
    if (formActs.length > 0) {
      formActs.forEach((e) => {
        this.formActions?.push(new ActionConfig(e));
      });
    }
  }
}

export class FormControls {
  fieldId: number;
  controlId: number;
  fieldLabel: string;
  controlName: string;
  valuesList?: any[];
  nestedPath?: string;
  onChange?: boolean;
  showIcon?: boolean;
  outerClass?: string;
  labelClass?: string;
  spanClass?: string;
  iconClass?: string;
  fieldClass?: string;
  id?: string;
  validations?: Validator[];
  dropDownValue?: string;
  dropDownLabel?: string;
  placeHolder?: string;

  constructor(params?: any) {
    if (params === void 0) params = {};
    this.fieldId = params.fieldId;
    this.controlId = params.controlId;
    this.fieldLabel = params.fieldLabel;
    this.controlName = params.controlName;
    this.nestedPath = params.nestedPath ?? null;
    this.valuesList = params.valuesList ?? null;
    this.onChange = params.onChange === void 0 ? false : params.onChange;
    this.showIcon = params.showIcon || 'field';
    this.outerClass = params.outerClass || 'field';
    this.labelClass = params.labelClass || '';
    this.spanClass = params.spanClass || '';
    this.iconClass = params.iconClass || '';
    this.fieldClass = params.fieldClass || '';
    this.id = params.id ?? null;
    this.validations = params.validations ?? null;
    this.dropDownValue = params.dropDownValue ?? null;
    this.dropDownLabel = params.dropDownLabel ?? null;
    this.placeHolder = params.placeHolder ?? 'Placeholder';
  }
}

export class ValuesConfig {
  key: string;
  value: string | number;
  label: string;

  constructor(params: any) {
    this.key = params.key ?? 'key';
    this.value = params.value ?? 'value';
    this.label = params.label ?? 'label';
  }
}
