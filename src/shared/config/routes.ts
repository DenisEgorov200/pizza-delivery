import { createHistoryRouter, createRoute } from 'atomic-router'
import { sample } from 'effector'
import { createBrowserHistory } from 'history'
import { appStarted } from './init'

export const routes = {
  home: createRoute(),
  auth: {
    finish: createRoute(),
  },
  cart: createRoute(),
}

export const mappedRoutes = [
  {
    route: routes.home,
    path: '/',
  },
  {
    route: routes.auth.finish,
    path: '/auth/finish',
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
