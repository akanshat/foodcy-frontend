import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./components/landing-page/landing-page";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Navbar from "./components/navbar/navbar";
import Dashboard from "./components/dashboard/dashboard";
import ResHome from "./components/reshome/reshome";
import { AuthContext } from "./contexts/auth";
import config from "./config";
import "./App.css";

function App() {
  const [token, setToken] = useState(); // const isLoggedIn = false
  const [user, setUser] = useState();

  useEffect(() => {
    if (token) {
      const { backendURL } = config;
      fetch(`${backendURL}/api/user`, {
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((res) => setUser(res.user));
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      const tk = localStorage.getItem("token");
      if (tk) {
        setToken(tk);
      }
    }
  }, [token]);

  const logMeOut = () => {
    localStorage.setItem("token", "");
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logMeOut, user }}>
      <Router>
        <div className="App">
          <Navbar name={user?.name} />
          <Switch>
            <Route exact path="/homepage">
              <HomePage />
            </Route>
            <Route exact path="/">
              <Redirect to="/homepage" />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/dashboard">
              {token ? <Dashboard /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/restaurant/:id">
              {token ? <ResHome /> : <Redirect to="/" />}
            </Route>
            <Route path="*">
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
