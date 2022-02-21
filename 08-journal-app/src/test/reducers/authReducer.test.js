import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types";


describe('Prueba en el AuthReducers ', () => {

    test('no debe de hacr cambios en el state ', () => {
        const initState = {
            uid:'abc123',
            name: 'Javier'
        };
        const action = {
            type: 'dfsdfsdfsd'
           
        }
        const state = authReducer(initState, action);
        expect(state).toEqual(initState);
    })


    test('debe de realizar el login ', () => {

        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: '132',
                displayName: 'Javier'
            }
        }
        const state = authReducer(initState, action);
        expect(state).toEqual({            
                uid: '132',
                name: 'Javier'
            
        });
    })

    test('debe de realizar el logout ', () => {

        const initState = {
            uid:'abc123',
            name: 'Javier'
        };
        const action = {
            type: types.logout
           
        }
        const state = authReducer(initState, action);
        expect(state).toEqual({});
    })
})