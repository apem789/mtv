/** 请求方法 */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

/** ContentType类型 */
export enum HttpContentType {
  /** json(JSON字符串) */
  JSON = 'application/json;charset=utf-8',
  /** xml(XML媒体格式) */
  XML = 'application/xml',
  /** 名称/值(转成字符) */
  URLENCAODED = 'application/x-www-form-urlencoded',
  /** 文件上传(转成二进制) */
  FORDATA = 'multipart/form-data',
}
