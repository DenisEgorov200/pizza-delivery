import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'

const button = cva([''], {
  variants: {
    intent: {
      primary: [
        'bg-yellow',
        'text-white',
        'rounded-lg',
        'transition-colors',
        'hover:text-brown',
      ],
      secondary: [
        'bg-blue',
        'text-gray-300',
        'rounded-full',
        'transition-colors',
        'hover:text-brown',
      ],
      empty: ['text-bold', 'text-gray-300'],
      thirdly: [
        'border',
        'border-blue',
        'rounded-xl',
        'transition-colors',
        'hover:bg-blue',
      ],
    },
    size: {
      small: ['text-sm', 'font-bold', 'py-1', 'px-6'],
      medium: ['text', 'font-bold', 'py-2', 'px-7'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children?: ReactNode
  loading?: boolean
}

export const Button = ({
  children,
  loading,
  disabled,
  className,
  intent,
  size,
  ...props
}: Props) => {
  return (
    <button
      className={button({ intent, size, className })}
      disabled={loading ?? disabled}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}
