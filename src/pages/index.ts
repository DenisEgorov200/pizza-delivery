import { LayoutBase } from '@layouts/base'
import { createRoutesView } from 'atomic-router-react'
import { FinishRoute } from './auth/finish'
import { CartRoute } from './cart'
import { HomeRoute } from './home'

export const Pages = createRoutesView({
  routes: [
    {
      route: HomeRoute.route,
      view: HomeRoute.view,
      layout: LayoutBase,
    },
    {
      route: FinishRoute.route,
      view: FinishRoute.view,
      layout: LayoutBase,
    },
    {
      route: CartRoute.route,
      view: CartRoute.view,
      layout: LayoutBase,
    },
  ],
})
