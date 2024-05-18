import { createHistoryRouter, createRoute } from 'atomic-router'
import { sample } from 'effector'
import { createBrowserHistory } from 'history'
import { appStarted } from './init'

export const routes = {
  catalog: createRoute(),
}

export const mappedRoutes = [
  {
    route: routes.catalog,
    path: '/catalog',
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
