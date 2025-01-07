import { FORM_CONSTANTS } from '../utils/Constants';

export class ActionConfig {
  actionName: string;
  actionTitle: string;
  buttonSelector: string;
  actionUrl?: string;
  showToast?: boolean;
  validations?: string[];
  constructor(params?: any) {
    if (params === void 0) params = {};
    this.actionName = params.actionName;
    this.actionTitle = params?.actionTitle
      ? params.actionTitle
      : 'Action Title';
    this.buttonSelector = params?.buttonSelector
      ? params?.buttonSelector
      : FORM_CONSTANTS.SELECTOR_BUTTON;
    this.actionUrl = params.actionUrl ?? null;
    this.showToast = params.showToast === void 0 ? false : params.showToast;
    this.validations = params.validations ?? [];
  }
}

export class Pagination {
  pageNo?: number;
  itemsPerPage?: number;
  totalCount?: number;
  pagingOption?: number[];

  constructor(params?: any) {
    if (params === void 0) params = {};
    this.pageNo = params?.pageNo ?? 0;
    this.itemsPerPage = params?.itemsPerPage ?? 10;
    this.totalCount = params?.totalCount ?? 0;
    this.pagingOption = params?.pagingOption ?? [10, 20, 50, 100];
  }
}
