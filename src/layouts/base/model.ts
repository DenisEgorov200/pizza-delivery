import { api } from '@shared/api'
import { attach, createEvent, createStore, sample } from 'effector'

const foodsToCartFx = attach({ effect: api.foods.foodsToCartFx })

export const formSubmitted = createEvent()
export const phoneChanged = createEvent<string>()

export const foodsSubmitted = createEvent()

export const $phone = createStore('')

$phone.on(phoneChanged, (_, phone) => phone)

sample({
  clock: foodsSubmitted,
  target: [foodsToCartFx],
})
