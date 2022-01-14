import React ,{ useState } from 'react'

import PropTypes from 'prop-types'

export const CounterApp = ({ value = 10}) => {


    //const [nombre, setNombre ] = useState("Goku");

    //console.log(nombre, setNombre);

    const [counter, setCounter] = useState(value);
    //handleAdd

    // const handleAdd = (e) => {
    //     console.log(e);
    // }

    const handleAdd = () => {
       //setCounter(counter + 1);
       setCounter( (c) => c + 1);
    }

    const handleSubtract = () => {
        //setCounter(counter + 1);
        setCounter( (c) => c - 1);
     }

     const handleReset = () => {
        //setCounter(counter + 1);
        setCounter(value);
     }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>

        </>
    )
}


CounterApp.propsType = {
    value: PropTypes.number
}

export default CounterApp;