import { UserAPI } from '@/api'
import { httpRequest, post } from '@/utils'

export const addUser = (data: any) => {
  return httpRequest(UserAPI.user, data)
}
