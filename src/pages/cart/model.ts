import { api } from '@shared/api'
import { routes } from '@shared/config/routes'
import { chainAuthenticated } from '@shared/viewer'
import { chainRoute } from 'atomic-router'
import { attach } from 'effector'

export const currentRoute = routes.cart

export const authenticatedRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.home.open,
})

export const foodsToCartFx = attach({ effect: api.foods.foodsToCartFx })

chainRoute({
  route: authenticatedRoute,
  beforeOpen: {
    effect: foodsToCartFx,
    mapParams: ({ params }) => params,
  },
})
