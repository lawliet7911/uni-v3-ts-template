export type APIUrl = {
  [key: string]: HTTPRequestRoute
}

export type HTTPRequestRoute = {
  url: string
  method: string
  base?: string
}

export * from './user'
