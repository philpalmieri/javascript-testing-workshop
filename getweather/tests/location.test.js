const nock = require('nock')
const { getLocation } = require('../location')

describe('env conf works', () => {
  test('it works', () => {
    expect(process.env.TESTING).toBe('TRUE')
  })
})

// --

describe('location connection', () => {
  let openCage
  let openCageQuery = {
    key: process.env.OPENCAGE_KEY 
  }
  beforeEach(() => {
    nock.disableNetConnect()
    nock.enableNetConnect(/^(127\.0\.0\.1|localhost)/)
    openCage = nock(process.env.OPENCAGE_URL)
      .get('/json')
  })

  afterEach( () => {
    nock.cleanAll()
    nock.restore()
  })

  test('city is sent properly', async () => {
    openCage.query({ ...openCageQuery, q: 'Orlando' })
      .reply(200, { hello: 'test' })

    const response = await getLocation('Orlando')
    const responseObj = JSON.parse(response)
    expect(responseObj.hello).toBe('test')

  })
})









