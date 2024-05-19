import { createHistoryRouter, createRoute } from 'atomic-router'
import { sample } from 'effector'
import { createBrowserHistory } from 'history'
import { appStarted } from './init'

export const routes = {
  home: createRoute(),
  cart: createRoute(),
}

export const mappedRoutes = [
  {
    route: routes.home,
    path: '/',
  },
  {
    route: routes.cart,
    path: '/cart',
  },
]

export const router = createHistoryRouter({
  routes: mappedRoutes,
})

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
})
