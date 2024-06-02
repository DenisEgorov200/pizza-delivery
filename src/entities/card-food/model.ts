import { createEvent, createStore } from 'effector'

export const foodAdded = createEvent()
export const foodRemoved = createEvent()

export const $foods = createStore([])

$foods.on(foodAdded, (state, food) => [...state, food])
$foods.on(foodRemoved, (state, food) => state.filter((id) => food.id === id))
