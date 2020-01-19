const nock = require('nock')
const { getLocation } = require('../location')

describe('env config works', () => {
  test('it worked', () => {
    expect(process.env.TESTING).toBe("true")
  })
})

describe('location connection', () => {
  test('city is sent', async () => {
    nock(process.env.OPENCAGE_URL)
      .get('/json')
      .query({ key: process.env.OPENCAGE_KEY, q: 'Orlando' })
      .reply(200, {hello: 'test'})
    const response = await getLocation('Orlando')
    console.log(response)
    expect(true).toBe(true)
  })
})
