const argV = require('./config/yargs.js').argv;

const { guardaArchivo, listarTabla } = require('./helper/tablas-helper.js');


let comando = argV._[0];


console.log(argV);
let numero = argV.numero;
let limite = argV.limit;
switch (comando) {
    case 'crear':
        console.log('crear');
        console.log(argV)


        guardaArchivo(numero, limite).then((res) => console.log(res)).catch((err) => console.log(err));
        break;
    case 'listar':
        console.log('listar')
        listarTabla(numero, limite).then().catch((err) => console.log(err));

        break;
    default:
        console.log('no pos no te lo reconozco')
}


/* let x = 3;
 */
//