import { FormEvent } from 'react'

export type Callback = (
  currentTarget: EventTarget & HTMLInputElement,
  event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
) => any

export type ReturnCallback = (event: FormEvent<HTMLInputElement>) => any
