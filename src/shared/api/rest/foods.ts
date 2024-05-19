import { createEffect } from 'effector'
import { client } from '../client'

export const foodsGetFx = createEffect(async () => {
  const { data } = await client.from('foods').select()

  return data
})

export const foodsToCartFx = createEffect(async ({ foods }) => {
  const { image, name, desc, price } = foods

  const { error } = await client.from('foods').insert({
    image,
    name,
    desc,
    price,
  })

  return
})
