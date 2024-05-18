import { Button } from '@shared/ui/button'

export const CardFood = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">
        <img src="/images/pizza.png" alt="pizza" />
      </div>
      <h3 className="mb-3.5 text-3xl font-extrabold text-gray-200">
        С креветками и трюфелями
      </h3>
      <p className="mb-5 font-medium text-gray-100">
        Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло,
        черный перец, пармезан.350 г
      </p>
      <div className="mt-auto flex w-full items-center justify-between">
        <span className="text-2xl font-bold">от 600 ₽</span>
        <Button>В корзину</Button>
      </div>
    </div>
  )
}
