import React from "react";
import GifteeCard from "./GifteeCard"


function GifteeCollection({ giftees }) {
    return (
        <div>
            {giftees.map((giftee) => {
                return (
                    <GifteeCard giftee={giftee} key={giftee.name} />
                )
            })}
        </div>
    )
}

export default GifteeCollection;