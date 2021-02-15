import './App.css';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/registration">
          <Registration />
        </Route>

        <Route path="*">
            <NotFound />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
