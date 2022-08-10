import { multiply } from '../src/index.js'

it('should multiply both numbers', () => {
    const a = 4, b = 8, expected = 32

    const actual = multiply(a, b)

    expect(actual).toBe(expected)
})