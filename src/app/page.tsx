'use client'
import { CheckIcon, CopyIcon } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { setTimeout } from 'timers'

import { Container } from '~/components/Container'
import { quotes as delicioQuotes } from '~/constants/quotes'

export default function Home() {
  const [quotes, setQuotes] = useState([delicioQuotes[0]])
  const [totalParagraphs, setTotalParagraphs] = useState(1)
  const [hasCopiedToClipboard, setCopiedToClipboard] = useState(false)

  function generateQuote() {
    if (totalParagraphs > 1) {
      for (let i = 1; i < totalParagraphs; i++) {
        const randomNumber = Math.floor(Math.random() * delicioQuotes.length)
        setQuotes((prevState) => [...prevState, delicioQuotes[randomNumber]])
      }

      return
    }

    const randomNumber = Math.floor(Math.random() * delicioQuotes.length)
    setQuotes([delicioQuotes[randomNumber]])
  }

  function handleCopyToClipboard() {
    const text = quotes.join('\n\n')
    navigator.clipboard.writeText(text)
    setCopiedToClipboard(true)
    setTimeout(() => setCopiedToClipboard(false), 2000)
  }

  function handleParagraphCountChange(event: ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value.replace(/\D/g, ''))

    setTotalParagraphs(value)
  }

  function incrementParagraphCounter() {
    setTotalParagraphs((prevState) =>
      prevState === 20 ? prevState : prevState + 1
    )
  }

  function decrementParagraphCounter() {
    setTotalParagraphs((prevState) =>
      prevState === 1 ? prevState : prevState - 1
    )
  }

  return (
    <main className="flex flex-col items-center justify-center pb-12">
      <Container className="flex w-full flex-col gap-8">
        <div className=" bg-slate-900 p-6">
          <Image
            src="/delicio.png"
            alt="Toninho Tornado no Podcast Podpah"
            width={900}
            height={900}
            className="border border-slate-50 object-cover"
          />

          <div className="mt-6 flex max-h-[264px] min-h-[264px] flex-col gap-6 overflow-y-auto pb-6 text-xl leading-relaxed text-slate-200 scrollbar scrollbar-thumb-slate-600">
            {quotes.map((quote) => (
              <p key={quote}>{quote}</p>
            ))}
          </div>
        </div>

        <div className="grid items-end gap-3 sm:grid-cols-3 sm:gap-4">
          <div>
            <label
              htmlFor="total-paragraphs"
              className="col-span-3 mb-2 block font-semibold text-slate-700"
            >
              Paragrafos
            </label>

            <div className="relative flex h-14 w-full flex-row overflow-hidden rounded-md bg-transparent">
              <button
                onClick={decrementParagraphCounter}
                className="h-full bg-slate-300 px-6 text-slate-600 outline-none hover:bg-slate-400 hover:text-slate-700"
              >
                <span className="text-2xl">−</span>
              </button>
              <input
                type="text"
                id="total-paragraphs"
                value={totalParagraphs}
                onChange={handleParagraphCountChange}
                maxLength={2}
                className="text-md md:text-basecursor-default flex w-full items-center bg-slate-300 text-center font-semibold  text-slate-700 outline-none hover:text-black focus:text-black focus:outline-none"
              />
              <button
                onClick={incrementParagraphCounter}
                className="h-full bg-slate-300 px-6 text-slate-600 hover:bg-slate-400 hover:text-slate-700"
              >
                <span className="text-2xl">+</span>
              </button>
            </div>
          </div>

          <button
            onClick={generateQuote}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-slate-800 px-8 text-lg font-medium text-white transition-colors hover:bg-slate-700 active:bg-slate-700"
          >
            Gerar novo texto
          </button>

          <button
            onClick={handleCopyToClipboard}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-slate-200 pl-6 pr-8 text-lg font-medium text-slate-800 transition-colors hover:bg-slate-300 active:bg-slate-300"
          >
            {hasCopiedToClipboard ? (
              <>
                <CheckIcon className="h-5 w-5" />
                <span>Texto copiado!</span>
              </>
            ) : (
              <>
                <CopyIcon className="h-5 w-5" />
                <span>Copiar texto</span>
              </>
            )}
          </button>
        </div>
      </Container>
    </main>
  )
}
