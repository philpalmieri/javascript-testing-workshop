const nock = require('nock')
const { getLocation } = require('../location')

describe('env config works', () => {
  test('it worked', () => {
    expect(process.env.TESTING).toBe("true")
  })
})

describe('location connection', () => {
  let openCage;
  let openCageQuery = {
    key: process.env.OPENCAGE_KEY
  }
  beforeEach( () => {
    nock.disableNetConnect()
    nock.enableNetConnect(/^(127\.0\.0\.1|localhost)/)
    openCage = nock(process.env.OPENCAGE_URL)
      .get('/json')
  })

  afterEach( () => {
    nock.cleanAll()
    nock.restore()
  })

  test('city is sent', async () => {
    openCage.query({ ...openCageQuery, q: 'Orlando' })
      .reply(200, {hello: 'test'})

    const response = await getLocation('Orlando')
    responseObj = JSON.parse(response) 
    expect(responseObj.hello).toBe('test')
  })
})
