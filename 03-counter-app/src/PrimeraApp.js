import React from "react";
import PropTypes from 'prop-types';
//SFC

//const PrimeraApp = ({saludo = 'Hola mundo'}) => {

const PrimeraApp = ({ saludo, subtitulo}) => {


    // const saludo = {
    //     nombre: 'Javier',
    //     edad: 35
    // }

    // if (!saludo) {
    //     throw new Error('El saludo es necesario');
    // }

    console.log(saludo);
    // const saludo = 'Hola Mundo';

    return (
        <>
            <h1>{saludo}!!</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo:'Soy un subtitulo'
}

export default PrimeraApp;