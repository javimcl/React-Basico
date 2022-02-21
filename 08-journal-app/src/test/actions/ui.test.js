import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('Pruebas en ui', () => {

    test('todas las acciones deben de funcionar', () => {

        const action = setError('Help!!!');

        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Help!!!'
        });

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();



        expect(removeErrorAction).toEqual({
            type: types.uiRemoverError
        });


        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        });


        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        });

    })
})