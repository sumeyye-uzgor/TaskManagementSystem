import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home.page';
import Login from "./pages/Login.page"

function App() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
        </Switch>
    );
}

export default App;
