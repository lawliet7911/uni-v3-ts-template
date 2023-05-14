export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === 'development') return '' // dev baseUrl
  else return '' // prod baseUrl
}

export const getBase2Url = ():string => {
  return ''
}