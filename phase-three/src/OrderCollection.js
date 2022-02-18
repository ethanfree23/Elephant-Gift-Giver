import React from "react";
import OrderHistory from "./OrderHistory"


function OrderCollection({ orders }) {
    return (
        <div>
            {orders.map((order) => {
                return (
                    <OrderHistory 
                    key={order.id}
                    giftee={order.giftee} 
                    gift={order.gift} 
                    user_id={order.user_id} 
                    gift_id={order.gift_id} 
                    />
                )
            })}<br/> <br/> <br/>
        </div>
    )
}

export default OrderCollection;