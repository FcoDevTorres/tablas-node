const fs = require('fs');
const colores = require('colors');


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(` Alguno de estos datos  no es un numero ${base} o ${limite}`);
            return;
        }

        for (let y = 1; y <= limite; y++) {
            console.log(`${base} x ${y} = ${base*y}`)
        }
    })
}

let guardaArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(` Alguno de estos datos  no es un numero ${base} o ${limite}`);
            return;
        }

        let tabla = '';
        for (let y = 1; y <= limite; y++) {
            tabla += `${base} x ${y} = ${base*y}`;
            tabla += y < limite ? "\n" : "";
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("Archivo creado :" + `tabla-${base}.txt`.red)
            }
        })
    });
}

module.exports = {
    guardaArchivo,
    listarTabla
};