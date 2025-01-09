import { environment } from 'src/environments/environment';

export const API_BASE_URL: string = environment.baseUrl;

export enum API_ENDPOINTS {
  // users routes
  LOGIN = 'user/login',
  USER_FIND_ALL = 'user/findAll',
  USER_CREATE = 'user/createUser',
  USER_UPDATE = '',

  // organizations routes
  ORGANIZATION_CREATE = 'organization/create',
  ORGANIZATION_FIND_ALL = 'organization/findAll',
  ORGANIZATION_UPDATE = 'organization/update',
  ORGANIZATION_DELETE = 'organization/delete',

  // applications routes
  APPLICATION_CREATE = 'application/create',
  APPLICATION_FIND_ALL = 'application/findAll',
  APPLICATION_UPDATE = 'application/update',
  APPLICATION_DELETE = 'application/delete',

  // application roles routes
  APPLICATION_ROLES_CREATE = 'application-role/create',
  APPLICATION_ROLES_FIND_ALL = 'application-role/findAll',
  APPLICATION_ROLES_UPDATE = 'application-role/update',
  APPLICATION_ROLES_DELETE = 'application-role/delete',
  APPLICATION_ROLES_FIND_ALL_LINKED_UNLINKED = 'application-role/findAllLinkedUnlinked',

  // business roles routes
  BUSINESS_ROLES_CREATE = 'business-role/create',
  BUSINESS_ROLES_FIND_ALL = 'business-role/findAll',
  BUSINESS_ROLES_UPDATE = 'business-role/update',
  BUSINESS_ROLES_DELETE = 'business-role/delete',
  BUSINESS_ROLES_FIND_ALL_LINKED_UNLINKED = 'business-role/findAllLinkedUnlinked',

  // business application roles routes
  BUSINESS_APPLICATION_ROLES_CREATE = 'business-application-role/create',
  BUSINESS_APPLICATION_ROLES_DELETE = 'business-application-role/delete',

  // organizations routes
  COUNTRY_FIND_ALL = 'country/findAll',
  COUNTRY_UPDATE = 'country/update',
  COUNTRY_DELETE = 'country/delete',
  COUNTRY_CREATE = 'country/create',

  // organizations routes
  PERSON_FIND_ALL = 'person/findAll',
  PERSON_UPDATE = 'person/update',
  PERSON_DELETE = 'person/delete',
  PERSON_CREATE = 'person/create',

  // bank routes
  BANK_CREATE = 'bank/create',
  BANK_FIND_ALL = 'bank/findAll',
  BANK_UPDATE = 'organization/update',
  BANK_DELETE = 'organization/delete',

  // account routes
  ACCOUNT_CREATE = 'account/create',
  ACCOUNT_FIND_ALL = 'account/findAll',
  ACCOUNT_UPDATE = 'account/update',
  ACCOUNT_DELETE = 'account/delete',

  // account routes
  TRANSACTION_CREATE = 'transaction/create',
  TRANSACTION_FIND_ALL = 'transaction/findAll',
  TRANSACTION_UPDATE = 'transaction/update',
  TRANSACTION_DELETE = 'transaction/delete',
}
