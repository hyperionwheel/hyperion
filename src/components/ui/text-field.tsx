import React from 'react'
import { Input } from './input'
import { Textarea } from './textarea'

type TextFieldProps = {
  label?: string
  error?: boolean
  multiline?: boolean
  placeholder?: string
  className?: string
  type?: string
}

export const TextField = ({ label, multiline, ...props }: TextFieldProps) => {
  const Component = multiline ? Textarea : Input

  return (
    <div className="flex flex-col w-full">
      <label className="text-[#F5F5F5] text-base leading-[20px] mb-0.5">{label}</label>
      <Component {...props} />
    </div>
  )
}

TextField.displayName = 'TextField'
