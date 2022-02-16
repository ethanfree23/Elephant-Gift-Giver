import './App.css';
import React, { useEffect, useState } from "react";
import {Switch, Route} from 'react-router-dom'
// import { Button } from 'react-bootstrap'
// import 'bootstrap/dis/css/bootstrap.in.css'


import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";

function App() {
  const [users, setUsers] = useState([]);
  const [giftees, setGiftees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then((r) => r.json())
    .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/giftees")
    .then((r) => r.json())
    .then((data) => setGiftees(data));
  }, []);

  return (
    <Switch>
      <Route path="/home" component={() => {
        return (
          <>
            <HomePage />
          </>
        )
      }} />
      <Route path="/dashboard" component={() => {
        return (
          <>
            <DashboardPage />
          </>
        )
      }} />
    </Switch>

    // <div>
    //   <Button>Test Button!</Button>
    //   <HomePage />
    // </div>
  )
};

export default App;