/**
 * axios 封装@ts
 */
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

/** 默认配置 */
axios.defaults.baseURL = process.env.VUE_APP_BASEURL || ''
axios.defaults.timeout = 10000
axios.defaults.withCredentials = false
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

const http = axios.create({
  timeout: 10000,
})

/** 请求拦截器 */
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

/** 响应拦截 */
http.interceptors.response.use(
  (response: AxiosResponse) => {
    const status = response.status
    if (status.toString().charAt(0) === '2') {
      // 200
      console.log(response)
      return response.data
    }

    // 非200
    // TODO
    // 400 500 300
    return Promise.reject(response)
  },
  (error: AxiosError) => {
    if (error?.response) {
      // 处理正常请求返回的异常
      // TODO
      const status = error?.response?.status
      console.log('异常status: ' + status)
    }
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      // 请求超时处理
      // TODO
      console.log('请求超时')
    }
    return Promise.reject(error)
  },
)

/**
 * get
 * @param url 请求地址
 * @param params query参数对象, key: value
 * @param config 其他配置
 */
export function get<T>(
  url: string,
  params?: Record<string, any>,
  config?: AxiosRequestConfig,
): Promise<T> {
  // 可以做请求缓存的处理
  // TODO
  return http.get(url, {
    params: params,
    ...config,
  })
}

/**
 * post
 * @param url 请求地址
 * @param params body参数对象, key: value
 * @param config 其他配置
 */
export function post<T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig,
): Promise<T> {
  // 可以做请求缓存的处理
  // TODO
  return http.post(url, data, config)
}

/**
 * put
 * @param url 请求地址
 * @param body body参数对象, key: value
 * @param config 其他配置
 */
export function put<T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig,
): Promise<T> {
  // 可以做请求缓存的处理
  // TODO
  return http.put(url, data, config)
}

/**
 * patch
 * @param url 请求地址
 * @param body body参数对象, key: value
 * @param config 其他配置
 */
export function patch<T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig,
): Promise<T> {
  // 可以做请求缓存的处理
  // TODO
  return http.patch(url, data, config)
}

/**
 * delete
 * @param url 请求地址
 * @param config 其他配置
 */
export function _delete(url: string, config?: AxiosRequestConfig) {
  return http.delete(url, config)
}

export default http
