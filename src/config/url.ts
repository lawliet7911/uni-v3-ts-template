type BaseUrl = {
  [key: string]: {
    dev: string
    prod: string
  }
}

const baseUrlMap: BaseUrl = {
  base: {
    dev: 'https://api.lawliet7911.top',
    prod: 'https://api.lawliet7911.top',
  },

  test: {
    dev: 'https://api.lawliet7911.top/test',
    prod: 'https://api.lawliet7911.top/test',
  },
}

export const getBaseUrl = (key: string = 'base'): string => {
  const baseUrlObj = baseUrlMap[key]
  const { dev, prod } = baseUrlObj
  if (process.env.NODE_ENV === 'development') return dev
  else return prod
}
