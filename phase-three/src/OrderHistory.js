import React from "react";

function OrderHistory({ name, user_id, gift_id }) {
    return (
        <div>
            <table>
                {/* <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Gift</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr> */}
                <tr>
                    <td>{name}</td>
                    <td>{user_id}</td>
                    <td>{gift_id}</td>
                </tr>
            </table>
        </div>
    )
}

export default OrderHistory;