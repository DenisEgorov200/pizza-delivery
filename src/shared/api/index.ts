import * as auth from './rest/auth'
import * as foods from './rest/foods'

export type { User } from './rest/common'

export const api = {
  auth,
  foods,
}
