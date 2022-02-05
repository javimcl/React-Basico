import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NodeScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='Some awesome title'
                    className='noter__title-input'
                    autoComplete='off'>
                </input>
                <textarea
                    placeholder='What happened today'
                    className='notes__textarea'>

                </textarea>
                <div className='notes__image'>
                    <img
                        src='https://earthsky.org/upl/gravity_forms/6-d184048789a60d766a02a8e43117298b/2022/02/DSC_2079.JPG'
                        alt='imagen'
                    />

                </div>

            </div>

        </div>
    );
};
