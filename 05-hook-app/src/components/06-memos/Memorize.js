import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effect.css'
import { Small } from './Small';

export const Memorize = () => {

    const {counter,increment} = useCounter(10);

    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter: <Small value={counter}>{counter}</Small></h1>
            <hr/>
            <button 
            onClick={increment}
            className='btn btn-primary'>
                +1
            </button>

            <button
            className="btn btn-ontline-primary ml-3"
            onClick={()=>{
                setShow(!show)
            }}>
                Show/hide {JSON.stringify(show)}
            </button>

            
        </div>
    )
}
