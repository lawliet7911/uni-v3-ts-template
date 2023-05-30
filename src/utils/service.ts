import { getBaseUrl } from '@/config'
import { extend } from './shared'
import { toast } from './uniTools'
import { HTTPMethod, HttpStatus } from '@/enums'

type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'

interface requestOptions {
  method?: Method
  header?: any
  url?: string
  loading?: Boolean
  data?: any
  disErrToast?: Boolean
  [key: string]: any
}

const TIMEOUT = 20 * 1000

const DEFAULT_OPTIONS: requestOptions = {
  url: '',
  method: HTTPMethod.GET,
  timeout: TIMEOUT,
  loading: true,
  header: {
    'Content-Type': 'application/json'
  }
}

let LoadingInstance = null

/**
 * 更多参数参考 https://uniapp.dcloud.net.cn/api/request/request.html#request
 * @param url 请求地址
 * @param options 传入的请求配置
 * @returns Promise
 */
export const request = async (url: string, options: requestOptions = {}) => {
  const config = useRequestInterceptor(url, options)

  // uni request不传入success fail complete返回的为promise
  if (config.loading) useLoading()
  try {
    const response = await uni.request(config)
    return useResponseInterceptors(config, response)
  } catch (error) {
    toast('请求异常')
  } finally {
    useHideLoading()
  }
}

type mergeRequestOption = UniApp.RequestOptions & requestOptions

// 请求拦截器 - 添加header等
const useRequestInterceptor = (url: string, options: requestOptions): mergeRequestOption => {
  const requestHeader = extend(DEFAULT_OPTIONS.header, options.header)
  const requestOptions = extend(DEFAULT_OPTIONS, options)
  requestOptions.url = getBaseUrl(options.base) + url
  requestOptions.header = requestHeader
  return requestOptions as mergeRequestOption
}

// 响应拦截器
const useResponseInterceptors = async (config: mergeRequestOption, response: any) => {
  useHideLoading()
  const { statusCode, data, cookies, header, errMsg } = response
  if (statusCode >= HttpStatus.SUCCESS && statusCode <= HttpStatus.ERROR) return data
  else {
    if (!config?.disErrToast) toast('服务异常')
    throw new Error(errMsg)
  }
}

// post
export const post = (url: string, data: any, config?: requestOptions) => {
  config = extend(extend(config || {}, { method: HTTPMethod.POST }), { data })
  return request(url, {
    method: HTTPMethod.POST,
    data
  })
}

// 统一request方法
export const httpRequest = (route: HTTPRequestRoute, data?: any, config: requestOptions = {}) => {
  let { method, url, base } = route
  method = method.toUpperCase()
  config.base = base
  if (method === HTTPMethod.GET) {
    config = extend(config, { data })
    return request(url, config)
  } else if (method === HTTPMethod.POST) {
    return post(url, data, config)
  } else return request(url, config)
}

const useLoading = () => {
  // uni loading 没有返回值 用其他loading UI 可以存一下instance
  LoadingInstance = uni.showLoading({
    title: '请求中' // loading text
  })
}

// 关闭loading
const useHideLoading = () => {
  // 其他ui loading可能需要用传入实例来关闭 -> loadingInstance
  uni.hideLoading()
}
