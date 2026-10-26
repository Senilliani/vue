import { addArray, sum } from '@/helpers/sum'
import { describe, expect, test } from 'vitest'

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // preparación
    const a = 1
    const b = 2

    // estímulo
    const result = sum(a, b)

    expect(result).toBe(a + b)
  })
})

describe('addArray funtion', () => {
  test('should to return 15', () => {
    // preparación
    const array: number[] = [4, 5, 6]

    // estímulo
    const result = addArray(array)

    expect(result).toBe(15)
  })

  test('should to return 5', () => {
    // preparación
    const array: number[] = [0, -1, 6]

    // estímulo
    const result = addArray(array)

    console.log('resultado', addArray(array))

    expect(result).toBe(5)
  })

  test('should to return zero if the array is Empty', () => {
    // preparación
    const array: number[] = []

    // estímulo
    const result = addArray(array)

    console.log('resultado', addArray(array))

    expect(result).toBe(0)
  })
})
