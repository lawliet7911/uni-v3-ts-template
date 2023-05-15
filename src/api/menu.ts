import { HTTPMethod } from '@/enums'
import type { APIUrl } from '.'

export const MenuAPI: APIUrl = {
  menu: { url: '/api/menu', method: HTTPMethod.GET },
}
