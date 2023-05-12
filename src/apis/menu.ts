import { request } from '@/utils'

export const getMenu = () => {
  return request('/api/menu')
}
