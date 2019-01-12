const opciones = {
    numero: {
        demand: true,
        alias: 'n'
    },
    limit: {
        alias: 'l',
        default: 0
    }
}

const argv = require('yargs')
    .command('listar', 'Enlistame esta', opciones)
    .command('crear', 'Crear un archivo prro', opciones).help().argv;

module.exports = {
    argv
}