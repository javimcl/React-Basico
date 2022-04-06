import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { CalendarModal } from '../../../components/calendar/CalendarModal'
import moment from 'moment';

import { eventCleanActiveEvent, eventSetActive, eventStartAddNew, eventStartUpdate } from '../../../actions/events';
import { act } from 'react-dom/test-utils';
import Swal from 'sweetalert2';



jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}))
jest.mock('../../../actions/events', () => ({
    eventStartUpdate: jest.fn(),
    eventCleanActiveEvent: jest.fn(),
    eventStartAddNew: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


const now = moment().minutes(0).seconds(0).add(1, 'hours');
const fin = now.clone().add(1, 'hours');


const initState = {
    calendar: {
        events: [],
        activeEvent: {
            title: 'Hola Mundo',
            notes: 'Algunas notas',
            start: now.toDate(),
            end: fin.toDate()
        }
    },
    ui: {
        modalOpen: true
    },
    auth: {
        checking: false,
        uid: "622a9d5596d0f1099941f3bb",
        name: "Javier"
    }
}
let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <CalendarModal />

    </Provider>
)

describe('Pruebas en <CalendarModal/>', () => {

    beforeEach(() => {
        jest.clearAllMocks()
    })
    test('debe de mostrar el modal', () => {
        //expect(wrapper.find('.modal').exists()).toBe(true)
        expect(wrapper.find('Modal').prop('isOpen')).toBe(true)

    })

    test('debe de llamar la accion de actualizar y cerrar modal', () => {

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        })

        expect(eventStartUpdate).toBeCalledWith(initState.calendar.activeEvent)
        expect(eventCleanActiveEvent).toBeCalled()
    })

    test('debe de mostrar error si falta el titulo', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        })
        //expect(eventStartUpdate).toBeCalledWith(initState.calendar.activeEvent)
        expect(wrapper.find('input[name="title"]').hasClass('is-invalid')).toBe(true)
    })

    test('debe de crear un nuevo evento', () => {
        const initState = {
            calendar: {
                events: [],
                activeEvent: null
            },
            ui: {
                modalOpen: true
            },
            auth: {

                uid: "622a9d5596d0f1099941f3bb",
                name: "Javier"
            }
        }
        let store = mockStore(initState);
        store.dispatch = jest.fn();

        const wrapper = mount(
            <Provider store={store}>
                <CalendarModal />

            </Provider>
        )

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola pruebas'
            }
        })

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        })

        expect(eventStartAddNew).toHaveBeenCalledWith({
            end: expect.anything(),
            start: expect.anything(),
            title: 'Hola pruebas',
            notes: ''
        })

        expect(eventCleanActiveEvent).toHaveBeenCalled()


    })

    test('debe de validar la fechas', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola pruebas'
            }
        })

        const hoy = new Date();

        act(() => {
            wrapper.find('DateTimePicker').at(1).prop('onChange')(hoy)
        })

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        })

        expect(Swal.fire).toHaveBeenCalledWith("Error", "La fecha fin debe ser mayor a la fecha de inicio")

    })
})