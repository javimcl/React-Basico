import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

import { mount } from 'enzyme'
import React from 'react'
import { Provider } from "react-redux";
import { Sidebar } from '../../components/journal/Sidebar';
import { startLogout } from '../../actions/auth';
import { activeNote, startNewNote } from '../../actions/notes';
import { NoteScreen } from '../../components/notes/NoteScreen';

jest.mock('../../actions/notes', () => ({
    activeNote: jest.fn()

}))


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '1',
        name: 'Javier'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: '1234',
            title: 'title',
            body: 'body',
            date: 0
        },
        notes: [],
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <NoteScreen />
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <Sidebar/>', () => {
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de disparar el active note', () => {

        // console.log(wrapper.find('button').exists);
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        });
        expect(activeNote).toHaveBeenLastCalledWith(
            "1234",
            {
                id: "1234",
                title: 'Hola de nuevo',
                body: 'body',
                date: 0

            }
        );
    })

})