

const personajes = ['Goku','Vegetta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [,,p3] = personajes;


// console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros]= retornaArreglo();

// console.log(letras, numeros);

//Tarea
//1. el primer valor del arr se llamara nombre
//2. el se llamara setNombre
const useState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];

}

const [nombre, setNombre] = useState('Goku');

//arr[1]();

console.log(nombre)
setNombre();