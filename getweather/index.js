const program = require('commander')
program.option('-n, --name <string>', 'what is your name')
program.parse(process.argv)

const { hello } = require('./hello')

if(!process.argv.slice(2).length) {
  program.outputHelp()
  process.exit()
}

console.log(hello(program.name))

