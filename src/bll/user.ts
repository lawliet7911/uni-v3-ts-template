import { UserAPI } from '@/api'
import { httpRequest } from '@/utils'

export const addUser = (data: any) => {
  return httpRequest(UserAPI.user, data)
}
