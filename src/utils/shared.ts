import dayjs from 'dayjs'
import cloneDeep from 'lodash-es/cloneDeep'

export type PlainObject = Record<string, unknown>

export const isObject = (val: unknown): val is PlainObject => typeof val === 'object' && val !== null

export const getPlainType = (val: unknown): string => Object.prototype.toString.call(val).slice(8, -1).toLowerCase()

export const formatDateTime = (time: string | number | Date, format = 'YYYY-MM-DD HH:mm:ss'): string => {
  if (!time) return 'N/A'
  if (typeof time === 'string' && time.indexOf('-') > -1) time.replace('/-/g', '/') // 兼容ios
  const date = new Date(time)
  return dayjs(date).format(format)
}

export const extend = <T extends PlainObject, U extends PlainObject>(first: T, second: U): T & U => ({ ...first, ...second })

export const clone = <T>(value: T): T => cloneDeep(value)
