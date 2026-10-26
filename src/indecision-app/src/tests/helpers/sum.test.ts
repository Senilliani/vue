import { sum } from '@/helpers/sum'
import { expect, test } from 'vitest'

test('adds 1 + 2 to equal 3', () => {
  // preparación
  const a = 1
  const b = 2

  // estímulo
  const result = sum(a, b)

  expect(result).toBe(a + b)
  /*   if (sum(1, 2) !== 3) {
    throw new Error('La suma no es la correcta')
  } */
})
