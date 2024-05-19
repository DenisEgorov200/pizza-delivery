import clsx from 'clsx'
import { ChangeEvent, InputHTMLAttributes } from 'react'

interface Props<T extends string>
  extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string
  onValue?: (value: string, { name }: { name: T }) => void
}

export const Input = <T extends string>({
  icon,
  type,
  className,
  onValue,
  ...props
}: Props<T>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget
    onValue(value, { name: name as T })
  }

  return (
    <>
      <input
        className={clsx(
          'rounded-lg border border-[#E2E2E9] px-5 py-2.5 font-bold text-black-200 outline-none',
          className,
        )}
        onChange={handleChange}
        {...props}
      />
    </>
  )
}
