import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Nav from "./Nav";
import About from "./About";
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";
import NewGifteeForm from "./NewGifteeForm";
import GifteeCollection from "./GifteeCollection";
import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";
import OrderCollection from "./OrderCollection";
import Footer from "./Footer";

function App() {
  const [users, setUsers] = useState([]);
  const [giftees, setGiftees] = useState([]);
  const [orders, setOrders] = useState([]);
  // const [gifts, setGifts] = useState([]);
  // const [removeRequest, setRemoveRequest] = useState(false);

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

  function handleAddUser(newUser) {
    const newUserArray = [newUser, ...users];
    setUsers(newUserArray)
  }

  function handleAddGiftee(newGiftee) {
    const newGifteeArray = [newGiftee, ...giftees];
    setGiftees(newGifteeArray)
  }

  // return (
  //   <div>
  //     <LoginForm users={users}/>
  //     <HomePage />
  //     <DashboardPage giftees={giftees} orders={orders} />
  //   </div>
  // )

  return (
    <div>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={
          <LoginForm users={users} />
        } />

        {/* HOME */}
        <Route path="/home" element={
          <>
            <Nav />
            <About />
            <SignUp onAddUser={handleAddUser} />
            <Footer />
          </>
        } />

        {/* {DASHBOARD} */}
        <Route path="/dashboard" element={
          <>
            <Nav />
            <NewGifteeForm onAddGiftee={handleAddGiftee} />
            <GifteeCollection giftees={giftees} />
            <Footer />
          </>
        } />

      </Routes>
    </div>
  )
};



export default App;


{/* <Route path="/create" element={
  <div>
    <Navigation />
    <CreateHost handleAddHost={handleAddHost} />
  </div>
} /> */}



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