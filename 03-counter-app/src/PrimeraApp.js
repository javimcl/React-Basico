import React from "react";
//SFC

const PrimeraApp = ({saludo = 'Hola mundo'}) => {


    // const saludo = {
    //     nombre: 'Javier',
    //     edad: 35
    // }

    console.log(saludo);
   // const saludo = 'Hola Mundo';

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <h1>Mi primera aplicacion</h1>
        </>
    );
}

export default PrimeraApp;