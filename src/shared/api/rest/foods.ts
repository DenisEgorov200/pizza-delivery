import { createEffect } from 'effector'
import { client } from '../client'
import { checkError } from './common'

export const foodsGetFx = createEffect(async () => {
  const { data } = await client.from('foods').select()

  return data
})

export const foodsToCartFx = createEffect(async ({ foods }) => {
  const { image, name, desc, price } = foods

  console.log(foods)

  const { error } = await client.from('cart').insert({
    image,
    name,
    desc,
    price,
  })

  checkError(error)
})
