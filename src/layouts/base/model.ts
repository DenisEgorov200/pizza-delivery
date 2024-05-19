import { api } from '@shared/api'
import { attach, createEvent, createStore, sample } from 'effector'
import { not } from 'patronum'

export type SignInError = 'UnknownError' | 'InvalidEmail' | 'RateLimit'

const signInFx = attach({ effect: api.auth.signInWithEmailFx })

const foodsToCartFx = attach({ effect: api.foods.foodsToCartFx })

export const formSubmitted = createEvent()
export const emailChanged = createEvent<string>()

export const foodsSubmitted = createEvent()

export const $email = createStore('')
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

sample({
  clock: foodsSubmitted,
  target: [foodsToCartFx],
})
