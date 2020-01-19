const { hello } = require('../hello')

describe('hello module', () => {
  test('name returns with hello, name', () => {
    const testName = 'joe'
    const expectedResult = `hello, ${testName}` 
    const returnedName = hello(testName)
    expect(returnedName).toBe(expectedResult)
  })
})
