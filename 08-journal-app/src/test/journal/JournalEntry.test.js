import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

import { mount } from 'enzyme'
import React from 'react'
import { Provider } from "react-redux";
import { activeNote } from '../../actions/notes';
import { JournalEntry } from '../../components/journal/JournalEntry';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const nota = {
    id: 10,
    date: 0,
    title: 'Hola',
    body: 'Mundo',
    url: 'https://algunluga.com/foto.jpg'
}

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <JournalEntry {...nota}/>
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <JournalEntry/>', () => {
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de ativar la nota', () => {

       wrapper.find('.journal__entry').prop('onClick')();
       expect(store.dispatch).toHaveBeenCalledWith(
           activeNote(nota.id, {...nota})
       );
    })

   
})