import React from 'react'
//import React, { useState, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //    const [count, setCount] = useState(0);

    const { data: images, loading } = useFetchGifs(category);
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     // getGifs();
    //     getGifs(category)
    //         .then(setImages);
    //     // .then(imgs => setImages(imgs));
    // }, [category]);


    // const getGifs = async () => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=yQDsU2RIFRTYsbt5aZ37IG4b2hQftQlN`
    //     const resp = await fetch(url);
    //     const { data } = await resp.json();

    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     console.log(gifs);
    //     setImages(gifs);

    // }

    //getGifs();

    return (
        <>
            <h3 className='animate__animated animate__swing'>{category}</h3>
            { loading && <p className='animate__animated animate__heartBeat'>Loading</p>}
            <div className='carGrid'>

                {/* <ol> */}
                {
                    images.map(img =>
                        <GifGridItem key={img.id} {...img} />
                        // <li key={id}>{title}</li>
                    )
                }
                {/* </ol> */}

                {/* <h3>{ count }</h3>
            <button onClick={() => setCount(count + 1)}></button> */}
            </div>
        </>
    )
}
