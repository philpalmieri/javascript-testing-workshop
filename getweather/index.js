require('dotenv').config()
const program = require('commander')
const { getLocation } = require('./location')
program.option('-c, --city <string>', 'what is your city')
program.parse(process.argv)

if(!process.argv.slice(2).length) {
  program.outputHelp()
  process.exit()
}

//Application Below

const run = async (city) => {
  try {
    const cityData = await getLocation(city)
    console.log(cityData)
  } catch(e) {
    console.error(e)
  }
}

if(program.city != '') {
  run(program.city)
}












