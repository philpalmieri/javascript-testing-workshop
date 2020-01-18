const { hello } = require('../hello')

describe('hello module', () => {
  //test('name returns with hello', () => {
    //const testName = 'joe'
    //const returnedName = hello(testName)
    //expect(returnedName).toBe(returnedName)
  //})
  //test('name returns with hello, name', () => {
    //const testName = 'joe'
    //const returnedName = hello(testName)
    //expect(returnedName).toBe(`hello, ${testName}`)
  //})
  test('name returns with Hello, Name', () => {
    const testName = 'joe'
    const expectedName = 'Joe'
    const returnedName = hello(testName)
    expect(returnedName).toBe(`Hello, ${expectedName}`)
  })
})
