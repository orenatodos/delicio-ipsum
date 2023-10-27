import Link from 'next/link'

import { Container } from './Container'

export function Header() {
  return (
    <header className="py-10">
      <Container className="text-center">
        <Link href="/">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-700 underline underline-offset-4 sm:text-6xl">
            Delicio Ipsum
          </h1>
          <p className="text-xl font-medium text-slate-600">
            O Lorem Ipsum do Delicio
          </p>
        </Link>
      </Container>
    </header>
  )
}
