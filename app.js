var chalk= require('chalk')
var yargs= require('yargs')
var commands= require('./commands')

// console.log(yargs.argv);

var command= yargs.argv._[0]
var title= yargs.argv.title
var body= yargs.argv.body

if(command==="add"){
  if(title&&body){
    commands.add(title,body)
  }
}
else if(command==="remove"){
  if(title){
    commands.remove(title)
  }
}
else if(command==="list"){
  commands.list()
}
else if(command==="read"){
  if(title){
    commands.read(title)
  }
}