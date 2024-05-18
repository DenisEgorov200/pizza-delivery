import { createEvent, createStore } from 'effector'

export const foodChanged = createEvent()

export const $foods = createStore([])

$foods.on(foodChanged, (state, food) => [...state, food])
