import { Button } from '@shared/ui/button'
import { MenuBurger } from '@shared/ui/menu-burger'

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

export const Header = () => {
  return (
    <header className="py-5">
      <div className="container mx-auto px-2.5">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#">
              <img src="/icons/logo.svg" alt="fibo" />
            </a>
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
            <Button className="text-brown max-md:hidden min-[1536px]:hidden">
              Корзина <span className="mx-3.5">|</span> 1
            </Button>
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
            <Button intent="empty">Войти</Button>
            <Button className="text-brown">
              Корзина <span className="mx-3.5">|</span> 1
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
