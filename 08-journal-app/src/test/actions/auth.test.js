import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";
import { types } from "../../types/types";




const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = { };

let store = mockStore(initState);



describe('Pruebas con las acciones de Auth', () => {


    beforeEach(() => {
        store = mockStore(initState);
    })

    test('login y logout deben de crear la accion respectiva', () => {
        const uid = '123sdc';
        const displayName = 'Javier'
        const loginAuth = login(uid, displayName);
        const logoutAuth = logout();
        expect(loginAuth).toEqual({
            type: types.login,
            payload: { uid, displayName }
        })

        expect(logoutAuth).toEqual({
            type: types.logout
        })
    })

    test('debe de realizar startLogout', async() => { 

        await store.dispatch(startLogout());

        const actions = store.getActions();

        console.log(actions);

        expect(actions[0]).toEqual({
            type: types.logout
        })

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        })


     })


     test('debe de iniciar el startLoginEmailPassword', async() => { 
         await store.dispatch(startLoginEmailPassword('test@testing.com','123456'));
         const actions  = store.getActions();
         console.log(actions);
         expect(actions[1]).toEqual({
             type: types.login,
             payload: {
                 uid: 'RKbYUh5qp1TUnAdiJ1WIr6kkfbl1',
                 displayName: null
             }

         })
      })


})