import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

export const eventStartAddNew = (event) => {
    return async (dispatch, getState) => {

        const { uid, name } = getState().auth;

        try {
            const resp = await fetchConToken('events', event, 'POST');
            const body = await resp.json();
            console.log(body)

            if (body.ok) {
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name: name
                }
                console.log(event);
                dispatch(eventAddNew(event));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
})

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
})


export const eventCleanActiveEvent = () => ({
    type: types.eventClearActiveEvent

})

export const eventStartUpdate = (event) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(`event/${event.id}`,event,'PUT');
            const body = await resp.json();

            if (body.ok) {
                dispatch(eventUpdated(event));
            }else {
                Swal.fire('Error', body.msg,'error')
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}

 const eventUpdated = (event) => ({
    type: types.eventUpdate,
    payload: event
})

export const eventDeleted = () => ({
    type: types.eventDeleted

})


export const eventStartLoading = () => {
    return async (dispatch) => {
        

        try {
            const resp = await fetchConToken('events');
            const body = await resp.json();
            console.log(body)

            const eventos =  prepareEvents(body.eventos);
            
        
            dispatch(eventLoaded(eventos));

        } catch (error) {
            console.log(error);
        }

    }
}

const eventLoaded = (eventos) => ({
    type: types.eventLoaded,
    payload: eventos
})