import React, { useState } from 'react';
import '../02-useEffect/effect.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Real</h1>
            <hr/>
            {show && <MultipleCustomHooks/>}
            <button
            className='btn btn-primary mt-5'
            onClick={()=> {
                setShow(!show)
            }}
            >
                Show/hide

            </button>
        </div>
    )
}
