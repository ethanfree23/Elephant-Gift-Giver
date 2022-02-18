import React from "react";

import Nav from "./Nav.js";
import NewGifteeForm from "./NewGifteeForm";
import OrderCollection from "./OrderCollection";
import GifteeCollection from "./GifteeCollection";
import Footer from "./Footer.js";

// Dashboard Page is so the user can see order history, add new giftees, and see data on their current giftees.

function DashboardPage({ giftees, orders }) {
    return (
        <div>
            <Nav />
            <NewGifteeForm />
            <OrderCollection orders={orders} />
            <GifteeCollection giftees={giftees} />
            <Footer />
        </div>
    )
}

export default DashboardPage;