import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

const initState = {
    checking: true
}

describe('Prueba al reducer authReducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer(initState, {});

        expect(state).toEqual(initState);

    })


    test('debe realizar el login', () => {
        const login = {
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'carlos'
            }
        };
        const state = authReducer(initState, login);

       
        expect(state).toEqual({
            "checking": false,
            "name": "carlos",
            "uid": "123",
        });


    })

    test('debe realizar el checkFinish', () => {
        const checkFinish = {
            type: types.authCheckingFinish
        };
        const state = authReducer(initState, checkFinish);

        expect(state).toEqual({
            "checking": false
        });


    })

    test('debe realizar el checkFinish', () => {
        const logout = {
            type: types.authLogout
        };
        const state = authReducer(initState, logout);

        expect(state).toEqual({
            "checking": false
        });


    })
})