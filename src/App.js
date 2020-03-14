import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Navbar from './components/navbar/navbar';
import Dashboard from './components/dashboard/dashboard';
import ResHome from './components/reshome/reshome';
import './App.css';

function App() {
  return (
    <Router>
      

      <div className="App">
        <Navbar name="Akansha" isLoggedIn={true}/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/restaurant/:id">
            <ResHome/>
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
