import { Button } from '@shared/ui/button'

export const CardFood = ({ food }) => {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="mb-2 h-full transition-transform hover:translate-y-2">
        <img src={food.image ? food.image : '/images/pizza.png'} alt="pizza" />
      </div>
      <h3 className="mb-3.5 text-3xl font-extrabold text-gray-200">
        {food.name}
      </h3>
      <p className="mb-5 font-medium text-gray-100">{food.desc}</p>
      <div className="mt-auto flex w-full items-center justify-between">
        <span className="text-2xl font-bold">от {food.price} ₽</span>
        <Button>В корзину</Button>
      </div>
    </div>
  )
}
