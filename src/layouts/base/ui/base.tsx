import { $foods } from '@entities/card-food/model'
import { routes } from '@shared/config/routes'
import { Button } from '@shared/ui/button'
import { MenuBurger } from '@shared/ui/menu-burger'
import { Link } from 'atomic-router-react'
import { useUnit } from 'effector-react'
import { ReactNode, useState } from 'react'
import { foodsSubmitted } from '../model'
import { Modal } from '@shared/ui/modal'
import { Input } from '@shared/ui/input'

const LINKS = [
  { id: 0, value: 'Пицца' },
  { id: 1, value: 'Паста' },
  { id: 2, value: 'Супы' },
  { id: 3, value: 'Салаты' },
  { id: 4, value: 'Напитки' },
  { id: 5, value: 'Десерты' },
  { id: 6, value: 'Бакалея' },
  { id: 7, value: 'Антипасти' },
  { id: 8, value: 'Акции' },
  { id: 9, value: 'Комбо' },
  { id: 10, value: 'Контакты' },
]

interface Props {
  children: ReactNode
}

export const LayoutBase = ({ children }: Props) => {
  const foods = useUnit($foods)
  const handleFoods = useUnit(foodsSubmitted)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="flex h-full w-dvw flex-col">
        <header className="py-5">
          <div className="container mx-auto px-2.5">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-12">
                <Link to={routes.home}>
                  <img src="/icons/logo.svg" alt="fibo" />
                </Link>
                <h1 className="text-xl font-semibold text-black-200 max-lg:hidden">
                  Доставка пасты <span className="text-yellow">Москва</span>
                </h1>
              </div>
              <div className="flex items-center gap-7">
                <Button intent="secondary" className="max-[1536px]:hidden">
                  <a href="tel:84993918449">Заказать звонок</a>
                </Button>
                <a
                  href="tel:84993918449"
                  className="text-2xl font-bold text-yellow max-sm:hidden"
                >
                  8 499 391-84-49
                </a>
                <Link to={routes.cart} onClick={() => handleFoods({ foods })}>
                  <Button className="text-brown min-[1536px]:hidden">
                    Корзина <span className="mx-3.5">|</span> {foods.length}
                  </Button>
                </Link>
                <MenuBurger className="min-[1536px]:hidden" />
              </div>
            </div>
            <div className="flex items-center justify-between max-2xl:hidden">
              <ul className="flex items-center gap-8 font-semibold text-black-100">
                {LINKS.map((link) => (
                  <li key={link.id}>
                    <a href="#">{link.value}</a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-7">
                <Button intent="empty" onClick={() => setIsOpen(true)}>
                  Войти
                </Button>
                <Link to={routes.cart} onClick={() => handleFoods()}>
                  <Button className="text-brown">
                    Корзина <span className="mx-3.5">|</span> {foods.length}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="container mx-auto flex-1 px-2.5">{children}</main>
        <footer className="py-5">
          <div className="container mx-auto flex items-center justify-between gap-4 px-2.5 max-sm:flex-col">
            <Link to={routes.home}>
              <img src="/icons/logo.svg" alt="fibo" />
            </Link>
            <div className="flex flex-col items-center">
              <h3 className="mb-4 font-bold uppercase text-black-100">
                Остались вопросы? А мы всегда на связи:
              </h3>
              <div className="flex gap-4 max-sm:flex-col">
                <Button intent="thirdly" className="flex justify-center">
                  <a href="https://vk.com/ctg_90">
                    <img src="/icons/vk.svg" alt="vk" />
                  </a>
                </Button>
                <Button intent="thirdly" className="flex justify-center">
                  <a href="https://t.me/feaxh">
                    <img src="/icons/tg.svg" alt="tg" />
                  </a>
                </Button>
                <Button intent="thirdly">
                  <a href="mailto:egorov.denis.evg@gmail.com">Написать нам</a>
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {isOpen && (
        <Modal className="relative">
          <h2 className="mb-10 text-3xl font-extrabold text-yellow">
            Вход на сайт
          </h2>
          <form action="">
            <div className="flex items-center gap-8">
              <label htmlFor="" className="font-semibold text-gray-100">
                Номер телефона
              </label>
              <Input type="text" />
            </div>
            <div className="mt-10 flex items-center gap-6">
              <Button className="h-full">Выслать код</Button>
              <p className="max-w-96 font-semibold text-gray-100">
                Продолжая, вы соглашаетесь со сбором и обработкой персональных
                данных и пользовательским соглашением
              </p>
            </div>
          </form>
          <div
            className="absolute right-10 top-10 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <img src="/icons/close.svg" alt="close" />
          </div>
        </Modal>
      )}
    </>
  )
}
