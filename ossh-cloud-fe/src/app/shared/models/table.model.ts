import { ActionConfig, Pagination } from './common.model';

export class TableConfig {
  tableTitle: string;
  tableData: any[];
  endPoint?: string;
  tableColumns: TableColumns[];
  tableActions?: ActionConfig[];
  rowActions?: ActionConfig[];
  pagination?: Pagination;

  constructor(params?: any) {
    params = Object.assign({}, params);

    this.tableColumns = [];
    this.tableActions = [];
    this.rowActions = [];
    this.tableTitle =
      params.tableTitle === void 0 ? 'Table Title' : params.tableTitle;
    this.endPoint = params.endPoint === void 0 ? null : params.endPoint;

    this.tableData = params?.tableData || [];
    this.pagination = new Pagination(params.pagination);

    const cols = params.tableColumns === void 0 ? [] : [...params.tableColumns];
    const tableActs =
      params.tableActions === void 0 ? [] : [...params.tableActions];
    const rowActs = params.rowActions === void 0 ? [] : [...params.rowActions];

    if (cols.length > 0) {
      cols.forEach((col: any) => {
        this.tableColumns.push(new TableColumns(col));
      });
    }
    if (tableActs.length > 0) {
      tableActs.forEach((e) => {
        this.tableActions?.push(new ActionConfig(e));
      });
    }
    if (rowActs.length > 0) {
      rowActs.forEach((e) => {
        this.rowActions?.push(new ActionConfig(e));
      });
    }
  }
}

export class TableColumns {
  field: string;
  colHeader: string;
  nestedPath?: string | Array<string>;
  multiplePaths?: string[];
  eventAction?: boolean;
  showBadge?: boolean;
  class?: string;
  pipe?: string;

  constructor(params?: any) {
    if (params === void 0) params = {};
    this.field = params.field;
    this.colHeader = params.colHeader || '';
    this.nestedPath = params.nestedPath ?? null;
    this.multiplePaths = params?.multiplePaths ?? null;
    this.showBadge = params.showBadge === void 0 ? false : params.showBadge;
    this.eventAction =
      params.eventAction === void 0 ? false : params.eventAction;
    this.class = params.class || '';
    this.pipe = params.pipe || null;
  }
}

// export class ActionConfig {
//   actionName: string;
//   actionTitle?: string;
//   actionUrl?: string;
//   visibleInActionMenu?: boolean;
//   showToast?: boolean;
//   constructor(params?: any) {
//     if (params === void 0) params = {};
//     this.actionName = params.actionName;
//     this.actionTitle = params.actionTitle || '';
//     this.actionUrl = params.actionUrl ?? null;
//     this.visibleInActionMenu =
//       params.visibleInActionMenu === void 0 ? true : params.visibleInActionMenu;
//     this.showToast = params.showToast === void 0 ? false : params.showToast;
//   }
// }

// export class FieldVisible {
//   table?: boolean;
//   view?: boolean;
//   edit?: boolean;
//   add?: boolean;
//   delete?: boolean;
//   search?: boolean;
//   submit?: boolean;
//   next?: boolean;
//   constructor(params?: any) {
//     if (params === void 0) params = {};
//     this.table = params?.table === void 0 ? true : params.table;
//     this.view = params?.view === void 0 ? true : params.view;
//     this.edit = params?.edit === void 0 ? true : params.edit;
//     this.add = params?.add === void 0 ? true : params.add;
//     this.delete = params?.delete === void 0 ? true : params.delete;
//     this.search = params?.search === void 0 ? true : params.search;
//     this.submit = params?.submit === void 0 ? true : params.submit;
//     this.next = params?.next === void 0 ? true : params.next;
//   }
// }

// export class FormValidators {
//   required?: boolean;
//   minLength?: number;
//   maxLength?: number;
//   invalidEmail?: boolean;
//   email?: boolean;
//   pattern?: string;
//   emailMustCheck?: string;
//   constructor(params?: any) {
//     if (params === void 0) params = {};
//     this.required = params?.required ?? undefined;
//     this.minLength = params?.minLength ?? undefined;
//     this.maxLength = params?.maxLength ?? undefined;
//     this.invalidEmail = params?.invalidEmail ?? undefined;
//     this.email = params?.email ?? undefined;
//     this.pattern = params?.pattern ?? undefined;
//     this.emailMustCheck = params?.emailMustCheck ?? undefined;
//   }
// }

// export class Pagination {
//   pageNo: number;
//   itemsPerPage: number;
//   totalCount: number;
//   pagingOption: number[];

//   constructor(params?: any) {
//     if (params === void 0) params = {};
//     this.pageNo = params?.pageNo ?? 0;
//     this.itemsPerPage = params?.itemsPerPage ?? 10;
//     this.totalCount = params?.totalCount ?? 0;
//     this.pagingOption = params?.pagingOption ?? [10, 20, 50, 100];
//   }
// }
