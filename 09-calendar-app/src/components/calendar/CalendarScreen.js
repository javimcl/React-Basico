import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/es';
import { AppRouter } from '../../router/AppRouter'
import { Navbar } from '../ui/Navbar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';

moment.locale('es');
const localizer = momentLocalizer(moment);
const events = [{
    title: 'cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'Javier'
    }

}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

    const onDoubleClick = (e) => {
        console.log(e);

    }

    const onSelectEvent = (e) => {
        console.log(e);

    }

    const onViewChange = (e) => {
       setLastView(e);
       localStorage.setItem('lastView', e);

    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        console.log(event, start, end, isSelected);

        const style = {
            blackgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
           // color: 'white'
        }

        return {
            style
        }

    }
    return (
        <div className='calendar-screen'>
            <Navbar />


            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

        </div>
    )
}
