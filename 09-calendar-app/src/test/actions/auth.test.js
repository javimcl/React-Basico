
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { startChecking, startLogin, startRegister } from '../../actions/auth';
import { types } from '../../types/types';
import Swal from 'sweetalert2';
import * as fechModule from "../../helpers/fetch";

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}))
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
Storage.prototype.setItem = jest.fn();
const initState = {}
let store = mockStore(initState)

describe('PRuebas en las acciones  Auth', () => {

    beforeEach(() => {
        store = mockStore(initState);
        store.clearActions();
    });

    test('start login correcto', async () => {

        
        await store.dispatch(startLogin('nando@gmail.com', '123456'));

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: expect.any(String),
                name: expect.any(String)
            }
        })

        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number));

        //localStorage.setItem.mock.calls[0][1]

    })


    test('startlogin incorrecto', async () => {

        await store.dispatch(startLogin('nando@gmail.com', '1234569'));
        let actions = store.getActions();

        expect(actions).toEqual([]);
        expect(Swal.fire).toHaveBeenCalledWith('Error', 'Password incorrecto', 'error');

        await store.dispatch(startLogin('nando2s@gmail.com', '123456'));
        actions = store.getActions();
        expect(Swal.fire).toHaveBeenCalledWith('Error', 'El usuario no existe con ese mail', 'error');

    })


    test('startRegister correcto', async () => {

        fechModule.fetchSinToken = jest.fn(() => ({
            json() {
                return {
                    ok: true,
                    uid: '123',
                    name: 'carlos',
                    token: 'ABV343'
                }
            }
        }));

        await store.dispatch(startRegister('test@gmail.com', '123456', 'Test'));

        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'carlos'
            }
        })

        expect(localStorage.setItem).toHaveBeenCalledWith('token', 'ABV343');
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number));

    })

    test('startChecking correcto', async () => { 

        fechModule.fetchConToken = jest.fn(() => ({
            json() {
                return {
                    ok: true,
                    uid: '123',
                    name: 'carlos',
                    token: 'ABV343'
                }
            }
        }));
        await store.dispatch(startChecking());
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'carlos'
            }
        })

        expect(localStorage.setItem).toHaveBeenCalledWith('token', 'ABV343')
     })

})