import { types } from "../../types/types";

describe('Pruebas con nuestros tipos', () => {

    test('debe de tener estos tipos', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] set Error',
            uiRemoverError: '[UI] Remove Error',

            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',

            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] set active note',
            notesLoad: '[Notes] New note',
            notesUpdate: '[Notes] Load notes',
            notesFileUrl: '[Notes] update image url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',

        });



    })

});