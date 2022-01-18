import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {


    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title}></img>
            <p>{title}</p>
            
        </div>
    )
}

GifGridItem.prototype = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}