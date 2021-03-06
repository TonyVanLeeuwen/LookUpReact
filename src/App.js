import React from "react";
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

function App() {
  return (
      <Router>
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
        <Observation/>
      </Route>
      <Route path="/postOverview">
        <PostOverview/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
    </Switch>
  </Router>)
}

export default App;
