import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effect.css'


export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);

    const [show, setShow] = useState(true);


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);


    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
            <p>{memoProcesoPesado}</p>
            <button
                onClick={increment}
                className='btn btn-primary'>
                +1
            </button>

            <button
                className="btn btn-ontline-primary ml-3"
                onClick={() => {
                    setShow(!show)
                }}>
                Show/hide {JSON.stringify(show)}
            </button>


        </div>
    )
}
