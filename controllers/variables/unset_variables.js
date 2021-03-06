function task_runner() {
  const args = Array.from(arguments)
  const program = args.splice(0, 1)[0]
  const options = args.splice(-1)[0]
  const variables = {}

  if(args.length == 0) {
    options.outputHelp()
    process.exit(1)
  }

  for(var i=0; i < args.length; i++) {
    variables[args[i]] = null
  }

  program.api.variables.set_variables({
    variables,
    environment: options.environment,
    pipeline: options.pipeline
  }).then(function(response) {
    if(options.json) {
      console.log(JSON.stringify(response))
    } else {
      program.utils.scrollTablePrint("Variables", Object.keys(response.variables).map(function(name) {
        return {
          name,
          value: response.variables[name].raw,
          computed: response.variables[name].computed
        }
      }))
    }
  })
}


module.exports = function(program) {
  program
    .command("variables:unset")
    .description("unset variable in environment")
    .option("-p, --pipeline <id>", "pipeline id")
    .option("-e, --environment <name>", "environment name")
    .option("--json", "print in json format", false)
    .action(task_runner.bind(null, program))
    .on('--help', function() {
      console.log('');
      console.log('Examples:');
      console.log('');
      console.log('  $ doppler variables:unset KEY');
      console.log('  $ doppler variables:unset KEY_1 KEY_2 ...');
      console.log('');
    });
}