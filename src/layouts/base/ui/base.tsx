import { $foods } from '@entities/card-food/model'
import { routes } from '@shared/config/routes'
import { Button } from '@shared/ui/button'
import { MenuBurger } from '@shared/ui/menu-burger'
import { SignIn } from '@widgets/sign-in'
import { Link } from 'atomic-router-react'
import { useUnit } from 'effector-react'
import { ReactNode, useState } from 'react'
import { $isAuth, signOutFx } from '../model'

interface Props {
  children: ReactNode
}

export const LayoutBase = ({ children }: Props) => {
  const foods = useUnit($foods)
  const [isAuth, handleSignOut] = useUnit([$isAuth, signOutFx])

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
                  Доставка пиццы <span className="text-yellow">Москва</span>
                </h1>
              </div>
              <div className="flex items-center gap-7">
                {isAuth ? (
                  <Button intent="empty" onClick={() => handleSignOut()}>
                    Выйти
                  </Button>
                ) : (
                  <Button intent="empty" onClick={() => setIsOpen(true)}>
                    Войти
                  </Button>
                )}
                <Link to={routes.cart} params={foods}>
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
      {isOpen && <SignIn setIsOpen={setIsOpen} />}
    </>
  )
}
