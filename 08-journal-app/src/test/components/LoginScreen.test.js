import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
import { LoginScreen } from "../../components/auth/LoginScreen"
import { mount } from 'enzyme'
import React from 'react'
import { Provider } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';


jest.mock('../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()

}))


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
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
);

describe('Pruebas de <LoginScreen/>', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    })


    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de disparar la accion de starGoogle', () => {
        wrapper.find('.google-btn').prop('onClick')();
        expect(startGoogleLogin).toHaveBeenCalled();

    })

    test('debe de disparar el starLogin', () => {
        wrapper.find('form').prop('onSubmit')({
            preventDefault() { }
        });
        expect(startLoginEmailPassword).toHaveBeenLastCalledWith('nando@iess.gob.ec', '123456');
    })
})