import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

import { mount } from 'enzyme'
import React from 'react'
import { Provider } from "react-redux";
import { login } from '../../actions/auth';
import { act } from 'react-dom/test-utils';
import { AppRouter } from '../../routers/AppRouter';
import { firebase } from '../../firebase/firebase-config';


jest.mock('../../actions/auth', () => ({
    login: jest.fn(),
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





describe('Pruebas en <AppRoute/>', () => {
    test('debe de llamar el login si estoy autenticado', async () => {

        let user;

        await act(async () => {
            const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456')
            user = userCred.user;
            //console.log(userCred)

            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );

        })

        expect(login).toHaveBeenCalledWith('RKbYUh5qp1TUnAdiJ1WIr6kkfbl1', null);

    })
})