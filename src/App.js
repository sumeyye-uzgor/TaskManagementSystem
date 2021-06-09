import './App.css';
import React from "react"
import { Redirect, Route, Switch } from 'react-router';
import AllTasks from './pages/AllTasks.page';
import CreateNewTask from "./pages/CreateNewTask.page"
import Login from "./pages/Login.page"
import ResponsiveDrawer from './components/Drawer.component';
import {connect} from "react-redux"

function App({userToken}) {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/login" exact>
                    <Login />
                </Route>
                {
                    userToken ?
                    (<ResponsiveDrawer>
                        <Route path="/" exact>
                            <AllTasks />
                        </Route>
                        <Route path="/newtask" exact>
                            <CreateNewTask />
                        </Route>
                    </ResponsiveDrawer> ) :
                    (<Redirect to="/login"/> )  
                }
            </Switch>
        </React.Fragment>

    );
}

const mapStateToProps = state => ( {
    userToken: state.userToken
})
export default connect(mapStateToProps)(App);
