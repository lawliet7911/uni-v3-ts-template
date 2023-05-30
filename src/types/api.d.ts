declare type APIUrl = {
  [key: string]: HTTPRequestRoute
}

declare type HTTPRequestRoute = {
  url: string
  method: string
  base?: string
}

declare type BaseUrl = {
  [key: string]: {
    dev: string
    prod: string
  }
}