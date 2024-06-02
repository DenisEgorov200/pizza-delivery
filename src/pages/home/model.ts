import { api } from '@shared/api'
import { routes } from '@shared/config/routes'
import { chainAuthenticated } from '@shared/viewer'
import { chainRoute } from 'atomic-router'
import { attach, restore, sample } from 'effector'

export const currentRoute = routes.home

// export const authenticatedRoute = chainAuthenticated(currentRoute, {
//   otherwise: routes.home.open,
// })

const getMeFx = attach({ effect: api.auth.getMeFx })
const signOutFx = attach({ effect: api.auth.signOutFx })
const getFoodsFx = attach({ effect: api.foods.foodsGetFx })

chainRoute({
  route: currentRoute,
  beforeOpen: getMeFx,
})

chainRoute({
  route: currentRoute,
  beforeOpen: getFoodsFx,
})

sample({
  clock: signOutFx.done,
  target: getMeFx,
})

export const $foods = restore(getFoodsFx, null)
