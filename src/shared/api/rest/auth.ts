import { createEffect } from 'effector'
import { client } from '../client'
import { checkError } from './common'

export const signInWithEmailFx = createEffect<string, Response, Error>(
  async ({ email }) => {
    const baseUrl = document.location.toString()
    const emailRedirectTo = new URL('/auth/finish', baseUrl).toString()

    const { error } = await client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo },
    })

    checkError(error)
  },
)

export const getMeFx = createEffect(async () => {
  const {
    data: { user },
    error,
  } = await client.auth.getUser()

  checkError(error)

  if (user) {
    return {
      id: user.id as string,
      email: user.email as string,
    }
  }

  return null
})
