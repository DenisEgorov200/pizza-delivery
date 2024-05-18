import { LayoutBase } from '@layouts/base'
import { createRoutesView } from 'atomic-router-react'
import { HomeRoute } from './home'

export const Pages = createRoutesView({
  routes: [
    {
      route: HomeRoute.route,
      view: HomeRoute.view,
      layout: LayoutBase,
    },
  ],
})
