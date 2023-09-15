console.clear();
// const { argv, options } = require('yargs');
// const fs = require('fs'); este se usa en la parte que lo usaremos
// const { argv, option } = require('yargs');
// const yargs = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const  argv  = require('./config/yargs');




// console.log(argv);


// console.log('base: yargs', argv.b );


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado '))
    .catch( err => console.log( err ));




// const base = 3;







//Esta es una forma mas antigua de hacer automatizado un proceso que MENOS efectiva

// const [ , , arg3 = 'base=5'  ] = process.argv;
// const [ , base = 5 ] = arg3.split ('=');
// console.log( base );



























// let salida = '';

// //imprimir la tabla el 5 en la consola
// for (let i = 1; i <= 10; i++) {
//     salida += `${ base } x ${ i } = ${ base * i }\n`;    
// }

// console.log( salida );

// fs.writeFileSync( `tabla-${ base }.txt`, salida); //es mas simple pero no controla de buena forma los errores

// // fs.writeFile( `tabla-${ base }.txt`, salida, ( err ) => {
// //     if ( err ) throw err;
// console.log(`tabla-${ base }.txt creado`);

