import { HTTPMethod } from '@/enums'
import type { APIUrl } from '.'

export const UserAPI: APIUrl = {
  user: { url: '/api/user', method: HTTPMethod.GET, base: 'test' },
}
