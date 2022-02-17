import React from "react";
import OrderHistory from "./OrderHistory"


function OrderCollection({ orders }) {
    return (
        <div>
            {orders.map((order) => {
                return (
                    <OrderHistory order={order} key={order.name} />
                )
            })}
        </div>
    )
}

export default OrderCollection;