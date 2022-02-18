import React from "react";

function GifteeCard({ name, city, state, category1, category2, category3, price }) {

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
            </div> <br/>
        </div>
    )
}

export default GifteeCard;