import { $foods } from '@entities/card-food/model'
import { api } from '@shared/api'
import { routes } from '@shared/config/routes'
import { chainAuthenticated } from '@shared/viewer'
import { chainRoute } from 'atomic-router'
import { attach, createStore } from 'effector'
import { debug } from 'patronum'

export const currentRoute = routes.cart

export const authenticatedRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.home.open,
})

const $cartFoods = createStore($foods)

debug($cartFoods)

export const foodsToCartFx = attach({
  effect: api.foods.foodsToCartFx,
  source: $cartFoods,
  mapParams: (_, foods) => foods,
})

chainRoute({
  route: authenticatedRoute,
  beforeOpen: {
    effect: foodsToCartFx,
    mapParams: ({ params }) => params,
  },
})
