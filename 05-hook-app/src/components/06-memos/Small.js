import React, { memo } from 'react'

export const Small = memo (({value}) => {
    console.log('me llamaron');
    return (
        <small>{value}</small>
    )
});
