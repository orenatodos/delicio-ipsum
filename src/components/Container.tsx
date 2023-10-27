import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IContainerProps extends ComponentProps<'div'> {}

export function Container({ className, ...props }: IContainerProps) {
  return (
    <div className={twMerge('mx-auto max-w-3xl px-6', className)} {...props} />
  )
}
