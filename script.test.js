import { capitalize, reverseString, calculator, cipher, analyzeArray } from './script'

test('Capitalize', () => {
    expect(capitalize('word')).toBe('Word')
})

test('Single word reverse', () => {
    expect(reverseString('drow')).toBe('word')
})

test('Multiword reverse', () => {
    expect(reverseString('race car')).toBe('rac ecar')
})

test('Addition', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

test('Subtract', () => {
    expect(calculator.subtract(1, 2)).toBe(-1)
})

test('Multiply', () => {
    expect(calculator.multiply(3, 2)).toBe(6)
})

test('Divide', () => {
    expect(calculator.divide(20, 5)).toBe(4)
})

test('Simple letter cipher', () => {
    expect(cipher('a', 1)).toBe('b')
})

test('Maintain letter casing.', () => {
    expect(cipher('aBc', 1)).toBe('bCd')
})

test('Wrap cipher letters inside corresponding library.', () => {
    expect(cipher('XYZ', 3)).toBe('ABC')
})

test('Maintain punctuation.', () => {
    expect(cipher('ab,C', 1)).toBe('bc,D')
})

test('Numbers in cipher.', () => {
    expect(cipher('xyz789', 3)).toBe('abc123')
})

test('Array analysis.', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]))
    .toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    })
})