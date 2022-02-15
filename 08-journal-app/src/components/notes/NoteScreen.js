import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title } = formValues;

    const activeId = useRef(note.id);


    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}))
      
    }, [formValues, dispatch])
    


    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='Some awesome title'
                    className='noter__title-input'
                    value={title}
                    name="title"
                    autoComplete='off'
                    onChange={handleInputChange}>
                </input>
                <textarea
                    placeholder='What happened today'
                    className='notes__textarea'
                    value={body}
                    name='body'
                    onChange={handleInputChange}
                >

                </textarea>

                {
                    (note.url)
                    &&
                    (<div className='notes__image'>
                        <img
                            src='https://earthsky.org/upl/gravity_forms/6-d184048789a60d766a02a8e43117298b/2022/02/DSC_2079.JPG'
                            alt='imagen'
                        />

                    </div>)
                }

            </div>

        </div>
    );
};
