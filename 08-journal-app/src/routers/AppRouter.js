import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth"
                        component={AuthRouter}>

                    </Route>
                    <Route path="/"
                        component={JournalScreen}>

                    </Route>
                    <Redirect to="/auth/login"/>
                </Switch>

            </div>
        </Router>
    );
};
