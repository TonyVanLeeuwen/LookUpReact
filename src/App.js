import './App.css';
import {
  BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import Home from "./pages/Home";
import CreateNeo from "./pages/CreateNeo";
import Login from "./pages/Login";
import Observation from "./pages/Observation";
import PostOverview from "./pages/PostOverview";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

import PageHeader from "./components/PageHeader/PageHeader";
import React from "react";

function App() {
  return (<Router>
    <PageHeader/>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/createNeo">
        <CreateNeo />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/observation">

      </Route>
      <Route path="/postOverview">

      </Route>
      <Route path="/profile">

      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
    </Switch>

  </Router>)
}

export default App;
