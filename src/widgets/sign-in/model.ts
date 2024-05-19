import { api } from '@shared/api'
import { attach, createEvent, createStore, sample } from 'effector'
import { not } from 'patronum'

export type SignInError = 'UnknownError' | 'InvalidEmail' | 'RateLimit'

const signInFx = attach({ effect: api.auth.signInWithEmailFx })
const getMeFx = attach({ effect: api.auth.getMeFx })

export const formSubmitted = createEvent()
export const emailChanged = createEvent<string>()

export const $email = createStore('')
export const $finished = createStore(false)
export const $error = createStore<SignInError | null>(null)

const $emailValid = $email.map(
  (email) => email.length > 5 && email.indexOf('@') > 0 && email.includes('.'),
)

$email.on(emailChanged, (_, email) => email)

sample({
  clock: formSubmitted,
  filter: not($emailValid),
  fn: (): SignInError => 'InvalidEmail',
  target: $error,
})

sample({
  clock: formSubmitted,
  source: { email: $email },
  target: [$error.reinit, signInFx],
})

$finished.on(signInFx.done, () => true)

$error.on(signInFx.failData, (_, error) => {
  if (error.status === 429) {
    return 'RateLimit'
  }
  return 'UnknownError'
})

sample({
  clock: signInFx,
  target: getMeFx,
})
