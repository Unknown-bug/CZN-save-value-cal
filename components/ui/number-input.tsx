"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface NumberInputProps {
  id?: string
  value: number
  defaultValue: number
  onChange: (value: number) => void
  min?: number
  className?: string
}

export function NumberInput({
  id,
  value,
  defaultValue,
  onChange,
  min = 0,
  className,
}: NumberInputProps) {
  const [displayValue, setDisplayValue] = useState<string>(value.toString())

  // Sync display value when prop value changes from external source
  useEffect(() => {
    setDisplayValue(value.toString())
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    // Allow empty string for better UX
    if (inputValue === '') {
      setDisplayValue('')
      return
    }

    // Only allow numeric input
    if (!/^\d+$/.test(inputValue)) {
      return
    }

    const num = Number.parseInt(inputValue, 10)
    if (!isNaN(num) && num >= min) {
      setDisplayValue(inputValue)
      onChange(num)
    }
  }

  const handleBlur = () => {
    // If empty on blur, revert to default value
    if (displayValue === '') {
      setDisplayValue(defaultValue.toString())
      onChange(defaultValue)
    }
  }

  return (
    <Input
      id={id}
      type="text"
      inputMode="numeric"
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      className={className}
    />
  )
}

