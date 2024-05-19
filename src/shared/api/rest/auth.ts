import { createEffect } from 'effector'
import { client } from '../client'
import { checkError } from './common'

export const signInWithPhoneFx = createEffect(async ({ phone }) => {
  const { error } = await client.auth.signInWithOtp({
    phone,
  })

  checkError(error)
})
