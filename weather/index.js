const program = require('commander')

program.option('-c, --city <string>', 'where do you live')
program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
  process.exit()
}
console.log(program.city)
