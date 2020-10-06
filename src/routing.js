import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminConsole from "./components/adminconsole/adminconsole";
import App from "./App";

function Routing() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/adminconsole" component={AdminConsole} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routing;




