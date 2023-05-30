import { MenuAPI } from '@/api/menu'
import { httpRequest } from '@/utils'

export const getMenu = (data: any) => {
  return httpRequest(MenuAPI.menu, data)
}
