import { api } from '@shared/api'
import { routes } from '@shared/config/routes'
import { chainRoute } from 'atomic-router'
import { attach } from 'effector'

export const currentRoute = routes.home

const getFoodsFx = attach({ effect: api.foods.foodsGetFx })

chainRoute({
  route: currentRoute,
  beforeOpen: getFoodsFx,
})
