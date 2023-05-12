import { post } from '@/utils'

export const addUser = (data: any) => {
  return post('/addUser', data)
}
