import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {

        setInputValue(e.target.value);
      //  console.log('llamado handle')

    }

    const handleSubmit = (e) => {
        e.preventDefault();
     //   console.log('submit')
        //const {setCategories} = props; 

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

        
       // console.log(setCategories);

    }

    return (

        <form onSubmit={ handleSubmit }>
            {/* <h1>{inputValue}</h1> */}
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}

            />
        </form>

    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}