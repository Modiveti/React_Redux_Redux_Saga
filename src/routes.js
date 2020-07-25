import React from 'react';
import Login from './components/Login/Login';
import SampleExample from './components/SampleExample/SampleExample';
import SearchPage from "./components/SearchPage/SearchPage";
import { Route } from "react-router-dom";

const appRoutes = () => (
    <div>
        <Route exact path="/"
            render={props => (<SampleExample  {...props} />)}
        />        
        <Route exact path="/login"
            render={props => (<Login  {...props} />)}
        />

        <Route exact path="/SearchPage"
            render={props => (<SearchPage  {...props} />)}
        />
    </div>
);

export default appRoutes;
