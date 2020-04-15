import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { isAuthenticated } from './auth';

import Personage from './pages/Personage';
import Types from './pages/Types';
import PersonageDetails from './pages/PersonageDetail';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route 
        {...rest} 
        render={props =>
                    isAuthenticated() ? 
                    ( <Component { ...props } /> ) : 
                    ( <Redirect to={{pathname: '/', state: { from: props.location }}} /> )}
    />
);


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Personage}/>
                <Route path="/types" exact component={Types}/>
                <PrivateRoute path="/personage_details/:id" exact component={PersonageDetails}/>
            </Switch>
        </BrowserRouter>
    );
}
