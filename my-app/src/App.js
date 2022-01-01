import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path='/register' exact>
            <Register />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
