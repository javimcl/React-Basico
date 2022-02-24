import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

import { mount } from 'enzyme'
import React from 'react'
import { Provider } from "react-redux";
import { Sidebar } from '../../components/journal/Sidebar';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

jest.mock('../../actions/auth', () => ({
    startLogout: jest.fn(),

}))

jest.mock('../../actions/notes', () => ({
    startNewNote: jest.fn()

}))


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: '02L6n2ZPdEgpELw8y7ML',
            title: 'Hola',
            body: 'Mundo'
        },
        notes: [],
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <Sidebar />
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <Sidebar/>', () => {
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de llamar el logout', () => {

       // console.log(wrapper.find('button').exists);
        wrapper.find('button').prop('onClick')();
        expect(startLogout).toHaveBeenCalled();
    })

    test('debe de llamar el startNewNote', () => { 

       // console.log(wrapper.find('.journal__new-entry').props());
        
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect(startNewNote).toHaveBeenCalled();
     })
})