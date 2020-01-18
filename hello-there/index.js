const program = require('commander')
const { hello } = require('./hello')

program.option('-n, --name <string>', 'whats your name')
program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
  process.exit()
}
console.log(hello(program.name))
