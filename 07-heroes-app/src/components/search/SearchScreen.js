import React, { useMemo, useState } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../../selectors/getHerosByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} =   queryString.parse(location.search);

   



    const initialForm = {
        searchText: q,
    };

    const [formValues, handleInputChange, reset] = useForm(initialForm);

    const { searchText } = formValues;
    console.log(formValues);

    const heroesFileted = useMemo(() => getHerosByName(q), [q]);

    

    const handleSearch = (e) => {
        e.preventDefault();
        //console.log(searchText);
        navigate(`?q=${ searchText }`)


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
                        (q=== '')
                            ? (<div className='alert alert-info'>Buscar un heroe</div>)
                            : (heroesFileted.length === 0)
                                && <div className='alert alert-danger'>No hay resultados: {q}</div>
                    }
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
