function task_runner(program, options) {
  program.api.pipelines.create({
    name: options.name,
    description: options.description
  }).then(function(response) {
    if(options.json) {    
      console.log(response)
    } else {
      console.table([response.pipeline])
    }
  })
}


module.exports = function(program) {
  program
    .command("pipelines:create")
    .description("create a new pipeline")
    .option("-n, --name <name>", "name of pipeline")
    .option("-d, --description <description>", "description of pipeline")
    .option("--json", "print in json format", false)
    .action(function(argument) {
      task_runner(program, argument)
    });
}