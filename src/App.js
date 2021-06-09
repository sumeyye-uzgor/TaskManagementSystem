import './App.css';
import React from "react"
import { Route, Switch } from 'react-router';
import Home from './pages/Home.page';
import Login from "./pages/Login.page"
import ResponsiveDrawer from './components/Drawer.component';

function App() {
    return (
        <React.Fragment>
            <ResponsiveDrawer>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
            </Switch>
            </ResponsiveDrawer>
        </React.Fragment>

    );
}

export default App;
