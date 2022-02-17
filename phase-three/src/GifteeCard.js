import React from "react";

function GifteeCard({ giftee }) {

    return (
        <div>
            {giftee.name} <br></br>
            {giftee.address} <br></br>
            {giftee.category1} <br></br>
            {giftee.category2} <br></br>
            {giftee.category3} <br></br>
            {giftee.price_low} <br></br>
            {giftee.price_high} <br></br>
        </div>
    )
}

export default GifteeCard;