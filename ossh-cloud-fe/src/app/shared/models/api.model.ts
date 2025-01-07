import { Observable } from 'rxjs';
import { Pagination } from './common.model';

export interface ApiResponse {
  documentation: string;
  data: any;
  statusCode: number;
  message: string;
}

export interface ApiActions {
  post(
    url: string,
    data: any,
    showToast?: boolean
  ): Observable<ApiResponse> | Promise<ApiResponse> | any;
}

export class ApiPayload {
  public static payload(obj: any, pagination?: Pagination) {
    let payload = {
      // 'data': [obj, (pagination?.pageNo !== 0)? pagination :  {}]
      data: [obj],
      pagination: pagination,
    };

    return payload;
  }
}

export class ApiResponse {
  public static getData(resp: ApiResponse) {
    return resp['data'][0][0];
  }

  public static getDataWithOneNested(resp: ApiResponse) {
    return resp['data'][0] ? resp['data'][0] : [];
  }
  public static getDataWithThreeNested(resp: ApiResponse) {
    return resp['data'][0][0][0];
  }
  public static getDataNotFound(resp: ApiResponse) {
    return resp['data'][0];
  }

  public static getTotalCount(resp: ApiResponse) {
    return resp['data'][0][1] ? resp['data'][0][1] : 0;
  }
  public static getTotalCountWithOneNested(resp: ApiResponse) {
    return resp['data'][1];
  }
}
