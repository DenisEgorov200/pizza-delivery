import { routes } from '@shared/config/routes'
import { chainRoute } from 'atomic-router'

export const currentRoute = routes.home

// chainRoute({
//   route: currentRoute,
//   ...startChain(api.accounts.accountsQuery),
// })
