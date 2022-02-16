import React from "react";

import Nav from "src/components/Home/Nav.js";
import Form from "./Form";
import OrderHistory from "./OrderHistory";
import UserCollection from "./UserCollection";
import Footer from "src/components/Home/Footer.js";

// Dashboard Page is so the user can see order history, add new giftees, and see data on their current giftees.

function DashboardPage(){
    return (
        <div>
            <Nav />
            <Form />
            <OrderHistory />
            <UserCollection />
            <Footer />
        </div>
    )
}

export default DashboardPage;