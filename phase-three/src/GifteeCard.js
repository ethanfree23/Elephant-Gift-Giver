import React, { useState } from "react";

function GifteeCard({ name, city, state, category1, category2, category3, price, handleRemoveGiftee, giftee, id }) {
    const [remove, setRemove] = useState(false);

    // function handleRemoveGiftee() {
    //     setRemove((remove) => !remove)
    // }

    // console.log(giftee.id)

    return (
        <div>
            <div>
                {name} <br />
                {city} <br />
                {state} <br />
                {category1} <br />
                {category2} <br />
                {category3} <br />
                {price} <br />
            </div> <br />
            <button
                onClick={() => handleRemoveGiftee(giftee)}>Remove</button>
        </div>
    )
}

export default GifteeCard;