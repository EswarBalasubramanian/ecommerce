import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminConsole from "./pages/adminconsole";
import App from "./App";

function Routing() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={App} exact />
                <Route path="/adminconsole" component={AdminConsole} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routing;




