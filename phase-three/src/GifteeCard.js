import React, { useState } from "react";

function GifteeCard({ name, city, state, category1, category2, category3, price, handleRemoveGiftee, id }) {
    const [remove, setRemove] = useState(false);

    const handleRemoveClick = () => {
        // Toggle the remove state when the button is clicked
        setRemove(!remove);
        // Call the handleRemoveGiftee function with the giftee id
        handleRemoveGiftee(id);
    };

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
            <button onClick={handleRemoveClick}>
                {remove ? "Undo Remove" : "Remove"}
            </button>
        </div>
    )
}

export default GifteeCard;
