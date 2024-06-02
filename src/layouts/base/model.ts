import { api } from '@shared/api'
import { attach, restore } from 'effector'

export const signOutFx = attach({ effect: api.auth.signOutFx })

export const $isAuth = restore(api.auth.getMeFx.doneData, null)
