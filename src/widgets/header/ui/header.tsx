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
      <div className="container mx-auto flex w-full flex-col gap-5">
        <div className="flex w-full items-center gap-12">
          <a href="#">
            <img src="/icons/logo.svg" alt="fibo" />
          </a>
          <div className="flex flex-1 items-center justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold text-black-200">
                Доставка пасты <span className="text-yellow">Москва</span>
              </h1>
              <ul className="flex items-center gap-5 font-bold">
                <li className="flex items-center gap-1.5">
                  <img src="/icons/yandex.svg" alt="yandex" />
                  <p>Яндекс еда</p>
                  <p className="flex items-center">
                    4.8{' '}
                    <img src="/icons/star.svg" alt="star" className="ml-1" />
                  </p>
                </li>
                <li className="flex items-center gap-1">
                  <p>Время доставки</p>
                  <p>от 31 мин</p>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-7">
              <button>Заказать звонок</button>
              <a
                href="tel:84993918449"
                className="text-2xl font-bold text-yellow"
              >
                8 499 391-84-49
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-8 font-semibold text-black-100">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a href="#">{link.value}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-7">
            <button>Войти</button>
            <button>Корзина | 1</button>
          </div>
        </div>
      </div>
    </header>
  )
}
