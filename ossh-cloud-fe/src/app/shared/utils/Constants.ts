export enum FE_URLS {
  HOME = '/',
  LOGIN = 'login',
  REGISTER = 'register',

  USERS = 'ums/users',
  ORGANIZATION = 'ums/organizations',
  APPLICATIONS = 'ums/applications',
  APPLICATION_ROLES = 'ums/application-roles',
  BUSINESS_ROLES = 'ums/business-roles',

  BANKS = 'finance/banks',
  ACCOUNTS = 'finance/accounts',
}

export class UTS {
  public static verificationKey = 'verification';
  public static userKey = 'user';
  public static tokenKey = 'token';
  public static caseKey = 'case';

  public static getVerificationFromLocalStorage() {
    let verificationJSON = localStorage.getItem(UTS.verificationKey);
    let verificationObject = verificationJSON
      ? JSON.parse(verificationJSON)
      : {};
    if (
      verificationObject?.[UTS.tokenKey] &&
      verificationObject?.[UTS.userKey] &&
      verificationObject?.[UTS.caseKey]
    ) {
      return verificationObject;
    } else {
      return null;
    }
  }

  public static getUserFromLocalStorage() {
    let verificationJSON = localStorage.getItem(UTS.verificationKey);
    let verificationObject = verificationJSON
      ? JSON.parse(verificationJSON)
      : {};
    if (verificationObject?.[UTS.userKey]) {
      return verificationObject?.[UTS.userKey];
    } else {
      return null;
    }
  }

  public static getTokenFromLocalStorage() {
    let verificationJSON = localStorage.getItem(UTS.verificationKey);
    let verificationObject = verificationJSON
      ? JSON.parse(verificationJSON)
      : {};
    if (verificationObject?.[UTS.tokenKey]) {
      return verificationObject?.[UTS.tokenKey];
    } else {
      return null;
    }
  }
}

export enum FORM_CONSTANTS {
  CTRL_CHECKBOX_ID = 0,
  CTRL_DATE_PICKER_ID = 1,
  CTRL_TIME_PICKER_ID = 2,
  CTRL_DATE_TIME_PICKER_ID = 3,
  CTRL_TEXT_BOX_ID = 4,
  CTRL_RADIO_ID = 5,
  CTRL_DROP_DOWN_ID = 6,
  CTRL_UPLOAD_ID = 7,
  CTRL_PASSWORD_ID = 8,

  FIELD_EMAIL_ID = 1,
  FIELD_NAME_ID = 2,
  FIELD_NUMBER_ID = 3,
  FIELD_PHONE_NUMBER_ID = 4,
  FIELD_TERMS_ID = 5,
  FIELD_DATE_ID = 6,
  FIELD_TIME_ID = 7,
  FIELD_DATE_TYPE_ID = 8,
  FIELD_TEXT_ID = 9,
  FIELD_RADIO_ID = 10,
  FIELD_LIST_ID = 11,

  SELECTOR_BUTTON = 'button',
}

export enum ACTIONS {
  LOGIN = 'login',
  LOGIN_TITLE = 'Login',
  REGISTER = 'register',
  REGISTER_TITLE = 'Register',
  ADD = 'add',
  ADD_TITLE = 'Add',
  EDIT = 'edit',
  EDIT_TITLE = 'Edit',
  VIEW = 'add',
  VIEW_TITLE = 'Add',
  DELETE = 'add',
  DELETE_TITLE = 'Add',
  LINK_UNLINK = 'link_unlink',
  LINK_UNLINK_TITLE = 'Link/Un Link',
}

export enum API_STATUS_CODE {
  OK = 200,
  CREATED = 201,
  API_NO_CONTENT_CODE = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ALLOWED = 405,
  REQUEST_TIMEOUT = 408,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
}

export enum LOGIN_CONSTANTS {
  CASE_VERIFIED = 'VERIFIED',
  CASE_OTP = 'OTP',

  JWT_ERROR = 'TokenExpiredError',
}

export enum CONST {
  // STATUS TYPES
  LID_ACTIVE_ID = 11,
  LID_INACTIVE_ID = 12,
}

// variables

export class COMMON_VARIABLES {
  public static applicationsList: any[] = [];

  public static setApplicationsList(values: any[]) {
    this.applicationsList = values;
  }
}
