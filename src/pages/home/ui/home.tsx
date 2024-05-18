import { Catalog } from '@widgets/catalog'
import { useUnit } from 'effector-react'
import { $foods } from '../model'

export const Home = () => {
  const foods = useUnit($foods)

  return (
    <>
      <Catalog foods={foods} />
    </>
  )
}
