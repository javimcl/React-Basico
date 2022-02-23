import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

import { mount } from 'enzyme'
import React from 'react'
import { Provider } from "react-redux";
import { RegisterScreen } from '../../components/auth/RegisterScreen';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
//store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
);

describe('PReubas en <RegisterScreen/>', () => {

    // beforeEach(() => {
    //     store = mockStore(initState);
    //     jest.clearAllMocks();
    // })


    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de hacer el dispatch de la acción respectiva', () => {
        const emailField = wrapper.find('input[name="email"]');
        emailField.simulate('change', {
            target: {
                value: 'xxx',
                name: 'email'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.uiSetError,
            payload: 'Email is not valida'
        })
    })

    test('debe de mostrar la caja de alerta con el error', () => {
        const initState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'Email is not valida'
            }
        };

        const store = mockStore(initState);
        //store.dispatch = jest.fn();

        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
        expect(wrapper.find('.auth__alert-error').text().trim()).toBe(initState.ui.msgError);
    })
})