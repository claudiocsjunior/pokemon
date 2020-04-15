import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Personage from './pages/Personage';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Personage}/>
            </Switch>
        </BrowserRouter>
    );
}
