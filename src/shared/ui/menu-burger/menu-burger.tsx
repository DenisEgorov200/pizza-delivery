import { clsx } from 'clsx'

interface Props {
  className?: string
}

export const MenuBurger = ({ className }: Props) => {
  return (
    <button
      type="button"
      className={clsx(
        'relative z-20 h-6 w-10 rotate-0 transform cursor-pointer transition ease-in-out',
        className,
      )}
    >
      <span className="absolute left-0 top-0 block h-0.5 w-full rotate-0 transform rounded-full bg-gray-100 transition ease-in-out" />
      <span className="absolute left-0 top-3 block h-0.5 w-full rotate-0 transform rounded-full bg-gray-100 transition ease-in-out" />
      <span className="absolute bottom-0 left-0 block h-0.5 w-full rotate-0 transform rounded-full bg-gray-100 transition ease-in-out" />
    </button>
  )
}
