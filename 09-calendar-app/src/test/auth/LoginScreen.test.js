
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';


import { LoginScreen } from '../../components/auth/LoginScreen';
import { startLogin } from '../../actions/auth';


jest.mock('../../actions/auth', () =>( {
    startLogin: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {}
let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <LoginScreen />

    </Provider>
)


describe('Pruebas en <LoginScreen/>', () => {
    test('debe de mostrarse correctamente', () => {


        expect(wrapper).toMatchSnapshot();

    })

    test('debe de llamar al dispatch del login', () => {


        wrapper.find('input[name="lEmail"]').simulate('change', {
            target: {
                name: 'lEmail',
                value: 'javier@gmail.com'
            }
        })

        wrapper.find('input[name="lPassword"]').simulate('change', {
            target: {
                name: 'lPassword',
                value: '123456'
            }
        })


        wrapper.find('form').at(0).prop('onSubmit')({
            preventDefault(){}
        })

        expect(startLogin).toHaveBeenCalledWith('javier@gmail.com', '123456');






    })
})