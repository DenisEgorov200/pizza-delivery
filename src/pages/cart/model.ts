import { routes } from '@shared/config/routes'
import { chainAuthenticated } from '@shared/viewer'

export const currentRoute = routes.cart

export const authenticatedRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.home.open,
})
