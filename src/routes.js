import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Personage from './pages/Personage';
import Types from './pages/Types';
import PersonageDetails from './pages/PersonageDetail';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Personage}/>
                <Route path="/types" exact component={Types}/>
                <Route path="/personage_details/:id" exact component={PersonageDetails}/>
            </Switch>
        </BrowserRouter>
    );
}
