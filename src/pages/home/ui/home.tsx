import { Button } from '@shared/ui/button'
import { Modal } from '@shared/ui/modal'
import { Catalog } from '@widgets/catalog'
import { useUnit } from 'effector-react'
import { $foods } from '../model'

export const Home = () => {
  const foods = useUnit($foods)

  return (
    <>
      <Catalog foods={foods} />
      <Modal className="relative">
        <h2 className="mb-10 text-3xl font-extrabold text-yellow">
          Вход на сайт
        </h2>
        <form action="">
          <div className="flex items-center gap-8">
            <label htmlFor="" className="font-semibold text-gray-100">
              Номер телефона
            </label>
            <input type="text" />
          </div>
          <div className="mt-10 flex items-center gap-6">
            <Button className="h-full">Выслать код</Button>
            <p className="max-w-96 font-semibold text-gray-100">
              Продолжая, вы соглашаетесь со сбором и обработкой персональных
              данных и пользовательским соглашением
            </p>
          </div>
        </form>
        <div className="absolute right-10 top-10 cursor-pointer">
          <img src="/icons/close.svg" alt="close" />
        </div>
      </Modal>
    </>
  )
}
