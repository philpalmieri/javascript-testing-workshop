const { OPENCAGE_KEY, OPENCAGE_URL } = process.env
const rp = require('request-promise')

module.exports.getLocation = async (city) => {
  const url = `${OPENCAGE_URL}/json?key=${OPENCAGE_KEY}`
  return await rp(`${url}&q=${city}`)
}
