import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export const GifExpertApp = () => {

   // const categorias = ['One Puch', 'Samurai X', 'Dragon Ball'];

   //const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon Ball']);

   const [categories, setCategories] = useState(['One Puch']);


// const handleAdd = () => {
//     //setCategories(...categories, 'HunterXHunter' );
//     setCategories(cats => [...cats, 'HunterXHunter'] ); 
// }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category}/>
                        //  <li key={categoria}>{categoria}</li>
                    ))
                }
            </ol>
        </>
    )
}
