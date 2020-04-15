import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Personage from './pages/Personage';
import Types from './pages/Types'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Personage}/>
                <Route path="/types" exact component={Types}/>
            </Switch>
        </BrowserRouter>
    );
}
