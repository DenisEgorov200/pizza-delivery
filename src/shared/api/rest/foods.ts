import { createEffect } from 'effector'
import { client } from '../client'

export const foodsGetFx = createEffect(async () => {
  const { data } = await client.from('foods').select()

  return data
})
