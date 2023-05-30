import { HTTPMethod } from '@/enums'

export const UserAPI: APIUrl = {
  user: { url: '/api/user', method: HTTPMethod.GET, base: 'test' }
}
