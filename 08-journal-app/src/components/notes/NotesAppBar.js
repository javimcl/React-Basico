import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes);
    const handleSave = () => {
        dispatch(startSaveNote(active));
    }


    const handlePictureClick = () => {

    }

    const handleFileChange = () => {
        
    }

    return (
        <div className='notes__appbar'>
            <span>28 de agosto 2022</span>

            <input 
            type="file"
            style={{ display: 'none'}}
            onChange={handleFileChange}>
            </input>






            <div>
                <button className='btn'
                onClick={handlePictureClick}>
                    Picture
                </button>
                <button className='btn'
                    onClick={handleSave}>
                    Save
                </button>
            </div>

        </div>
    );
};
