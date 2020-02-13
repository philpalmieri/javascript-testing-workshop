require('dotenv').config()
const program = require('commander')

const { getLocation } = require('./location')

program.option('-c, --city <string>', 'where do you live')
program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
  process.exit()
}

// Application Logic

const run = async() => {
  try {
    const cityData = await getLocation(program.city)
    const { results } = JSON.parse(cityData); 
    //console.log(JSON.stringify(results[0], null, 2))
  } catch (e) {
    console.error(e) 
  }
}

if(program.city != '') {
  run()
}
