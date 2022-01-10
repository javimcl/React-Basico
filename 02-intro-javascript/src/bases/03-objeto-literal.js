
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:'Quito',
        zip:'15456456',
        lat:14.456,
        lng:8.555554
    }

};


//console.table(persona)
console.log({
    persona
});

const persona2 = [...persona];
persona2.nombre = 'Peter';


console.log(persona2);

