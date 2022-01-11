

//Funciones en JS

const saludar = function( nombre ) {
    return `Hola, ${nombre}`;
}
const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;


//saludar = 3;


//console.log(saludar('Goku'));

console.log(saludar2('vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4('Goku'));

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username:'El_Papi324'
//     }
// }

//Los parentesis le colocan return
const getUser = () => ({
   
        uid: 'ABC123',
        username:'El_Papi324'
});

//Tarea
// 1. Transformar a una funcion flecha.
// 2. Tiene un que retornar un objeto implicito
// 3. pruebas
// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC675',
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) => ({
    
        uid: 'ABC675',
        username: nombre
});


const usuarioActivo = getUsuarioActivo('Javier');

console.log(usuarioActivo);