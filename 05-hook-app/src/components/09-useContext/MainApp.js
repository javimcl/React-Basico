import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {
    // const user = {
    //     id: 123,
    //     name:'Javier',
    //     email: 'fg@gmail.com'
    // }

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            temporal:1234
        }}>
            <AppRouter />
        </UserContext.Provider>

    );
};
