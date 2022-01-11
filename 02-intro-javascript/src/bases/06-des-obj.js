

//Desestructuracion
//Asignacion Desestrurante

const persona = {
    nombre: 'Tony',
    edad: '45',
    clave: 'Ironman',
    rango: 'Soldado'
};

//const {nombre: nombre2} = persona;

const {edad, clave, nombre} = persona;

//console.log(nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// const retornaPersona = (usuario) => {
    // const {edad, clave, nombre} = persona;
    // console.log(edad, clave, nombre);

// }

// const retornaPersona = ({nombre, edad, rango = 'Sargento'}) => {
    
//     console.log(edad, nombre, rango);

// }

const obtenerPersona = ({clave, nombre, edad, rango = 'Sargento'}) => {
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.333,
            lng: 32.444
        }
    }
  

}

//const {nombreClave, anios, latlng: {lat, lng}} = obtenerPersona(persona);

const {nombreClave, anios, latlng} = obtenerPersona(persona);
const { lat, lng} = latlng;
console.log(nombreClave, anios);
console.log(lat, lng);