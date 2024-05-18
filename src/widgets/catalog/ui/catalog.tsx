import { CardFood } from '@entities/card-food'

export const Catalog = ({ foods }) => {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-extrabold text-yellow">Пицца</h2>
      <ul className="grid grid-cols-4 gap-x-7 gap-y-12 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {foods?.map((food) => (
          <li key={food.id}>
            <CardFood food={food} />
          </li>
        ))}
      </ul>
    </div>
  )
}
