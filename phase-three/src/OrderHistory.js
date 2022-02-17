import React from "react";

function OrderHistory({order}) {
    return (
        <div>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Gift</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{order.user_id}</td>
                    <td>{order.gift_id}</td>
                    <td>{order.name}</td>
                </tr>
            </table>
        </div>
    ) 
}

export default OrderHistory;