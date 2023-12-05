export const firstUpCase = (value: string | undefined) => {
  if (!value) return value
  const handleValue =
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  return handleValue
}

export const handleNumberFormat = (value: string | undefined) => {
  if (!value) return value
  const handleValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return handleValue
}
