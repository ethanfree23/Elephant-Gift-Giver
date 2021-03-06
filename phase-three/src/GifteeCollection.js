import React from "react";
import GifteeCard from "./GifteeCard"


function GifteeCollection({ giftees, handleRemoveGiftee }) {
    return (
        <div>
            {giftees.map((giftee) => {
                return (
                    <GifteeCard
                        key={giftee.id}
                        id={giftee.id}
                        name={giftee.name}
                        city={giftee.city}
                        state={giftee.state}
                        category1={giftee.category1}
                        category2={giftee.category2}
                        category3={giftee.category3}
                        price={giftee.price}
                        handleRemoveGiftee={handleRemoveGiftee}
                        giftee={giftee}
                    />
                )
            })}
        </div>
    )
}

export default GifteeCollection;