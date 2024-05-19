import { currentRoute } from './model'
import { AuthFinishPage } from './ui/finish'

export const FinishRoute = {
  view: AuthFinishPage,
  route: currentRoute,
}
