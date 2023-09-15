const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar -b  y el num'
                })
                .option('l' ,{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla si se coloca -l'
                })
                .option('h' ,{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Define que tan largo sera'
                })
                .check( (argv, options ) => {
                    if ( isNaN ( argv.b , argv.h ) ) {
                        throw'La base debe ser un numero ' 
                    } return true;
                })
                .argv;

module.exports = argv;