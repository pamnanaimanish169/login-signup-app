import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import  View  from  './components/View/View';
import  Upload  from  './components/View/Upload/Upload';
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

          <Route path='/view' exact>
            <View />
          </Route>

          <Route path='/upload' exact>
            <Upload />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
