export const Cart = () => {
  return (
    <>
      <h1 className="mb-6 text-3xl font-extrabold text-yellow">Корзина</h1>
      <ul>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="max-w-16">
              <img src="/images/pizza.png" alt="pizza" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-black-100">
                С креветками и трюфелями
              </h3>
              <p className="max-w-96 font-medium text-gray-100">
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <p className="text-2xl font-extrabold text-yellow">120 ₽</p>
            <button className="item flex h-6 w-6 justify-center rounded-full border border-gray-100 transition-colors hover:border-yellow hover:text-yellow">
              X
            </button>
          </div>
        </li>
      </ul>
    </>
  )
}
