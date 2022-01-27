import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../../selectors/getHerosByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {



    const initialForm = {
        searchText: '',
    };

    const [formValues, handleInputChange, reset] = useForm(initialForm);

    const { searchText } = formValues;
    console.log(formValues);

    const heroesFileted =  getHerosByName('Algo');

    const handleSearch = (e) => {
        e.preventDefault();


        console.log(searchText);
        



    }
    return (
        <>
            <h1>Busquedas</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder='Buscar un heroes'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            onChange={handleInputChange}
                            value={searchText}>
                        </input>

                        <button
                            className='btn btn-outline-primary mt-1'
                            type='submit'

                        >
                            Buscar

                        </button>
                    </form>

                </div>

                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        heroesFileted.map(hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }


                </div>
            </div>
        </>
    );
};
