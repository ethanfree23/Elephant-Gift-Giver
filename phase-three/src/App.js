import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react'

import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";

function App() {
  // const [users, setUsers] = useState([]);
  const [giftees, setGiftees] = useState([]);
  const [orders, setOrders] = useState([]);
  // const [gifts, setGifts] = useState([]);
  // const [removeRequest, setRemoveRequest] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:9292/users")
  //     .then((r) => r.json())
  //     .then((data) => setUsers(data));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:9292/giftees")
      .then((r) => r.json())
      .then((data) => setGiftees(data));
  }, []);
  // }, [removeRequest]);

  useEffect(() => {
    fetch("http://localhost:9292/orders")
      .then((r) => r.json())
      .then((data) => setOrders(data));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:9292/gifts")
  //     .then((r) => r.json())
  //     .then((data) => setGifts(data));
  // }, []);

  // function handleAddGiftee(newGiftee) {
  //   const newGifteeArray = [newGiftee, ...giftees];
  //   setGiftees(newGifteeArray)
  // }

  return (
    <div>
      <HomePage />
      <DashboardPage giftees={giftees} orders={orders} />
    </div>
  )
};

export default App;





    // <Switch>
    //   <Route path="/home" component={() => {
    //     return (
    //       <>
    //         <HomePage />
    //       </>
    //     )
    //   }} />
    //   <Route path="/dashboard" component={() => {
    //     return (
    //       <>
    //         <DashboardPage />
    //       </>
    //     )
    //   }} />
    // </Switch>