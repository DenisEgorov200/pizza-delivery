import { CardFood } from '@entities/card-food'

const FOODS = [
  { id: 0, value: 'Пицца' },
  { id: 1, value: 'Паста' },
  { id: 2, value: 'Супы' },
  { id: 3, value: 'Салаты' },
  { id: 4, value: 'Напитки' },
  { id: 5, value: 'Десерты' },
  { id: 6, value: 'Бакалея' },
  { id: 7, value: 'Антипасти' },
]

export const Catalog = () => {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-extrabold text-yellow">Паста</h2>
      <ul className="grid grid-cols-4 gap-x-7 gap-y-12 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {FOODS.map((food) => (
          <li key={food.id}>
            <CardFood />
          </li>
        ))}
      </ul>
    </div>
  )
}
