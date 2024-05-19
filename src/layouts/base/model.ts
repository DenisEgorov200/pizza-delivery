import { api } from '@shared/api'
import { attach, createEvent, sample } from 'effector'

const foodsToCartFx = attach({ effect: api.foods.foodsToCartFx })

export const foodsSubmitted = createEvent()

sample({
  clock: foodsSubmitted,
  target: [foodsToCartFx],
})
