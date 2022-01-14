import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory';

export const GifExpertApp = () => {

   // const categorias = ['One Puch', 'Samurai X', 'Dragon Ball'];

   const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon Ball']);


// const handleAdd = () => {
//     //setCategories(...categories, 'HunterXHunter' );
//     setCategories(cats => [...cats, 'HunterXHunter'] ); 
// }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(categoria => {
                        return <li key={categoria}>{categoria}</li>
                    })
                }
            </ol>
        </>
    )
}
