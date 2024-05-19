import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export const Modal = ({ children, className }: Props) => {
  return (
    <div className="bg-yellow/50 fixed left-0 top-0 z-10 flex h-dvh w-dvw items-center justify-center">
      <div
        className={clsx('flex flex-col rounded-xl bg-white p-10', className)}
      >
        {children}
      </div>
    </div>
  )
}
