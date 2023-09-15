//imprimir la tabla el 5 en la consola

// const fs = require('fs');

// const crearArchivo = ( base ) => {

// console.clear()
// console.log('================')
// console.log(` Tabla del ${ base } `);
// console.log('================');

// let salida = '';

// for (let i = 1; i <= 10; i++) {
//     salida += `${ base } x ${ i } = ${ base * i }\n`;    
// }

// console.log( salida );

// fs.writeFileSync( `tabla-${ base }.txt`, salida); 
// console.log(`tabla-${ base }.txt creado`);

// }

// module.exports = { 
//     crearArchivo
// }

//Forma de promesa con sync + try + throw
const colors = require('colors');

const fs = require('fs');

const crearArchivo = async( base = 5, listar = false, hasta = 3 ) => {

try {

    let salida, consola = '';

    for (let i = 1; i <= `${ hasta }`; i++) {
    salida += `${ base } x ${ i } = ${ base * i }\n`;
    consola += `${ base } ${ 'x'.yellow } ${ i } ${ '='.blue } ${ base * i }\n`;    
    
    }
    if ( listar === true ) {
        console.clear()
        console.log('================')
        console.log(` Tabla del ${ base } `);
        console.log('================'); 
        console.log( consola );
    }



fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida); 
return`tabla-${ base }.txt creado`;

} catch (error) {
    throw error;
}

}


module.exports = { 
    crearArchivo
}