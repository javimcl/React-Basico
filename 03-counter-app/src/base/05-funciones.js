

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;




export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});




// Tarea
export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
//console.log( usuarioActivo );



