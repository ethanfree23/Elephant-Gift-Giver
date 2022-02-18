import React, { useState } from "react";

function NewGifteeForm({ onAddGiftee }) {

    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [category1, setCategory1] = useState('')
    const [category2, setCategory2] = useState('')
    const [category3, setCategory3] = useState('')
    const [price, setPrice] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const newGiftee = {
            name,
            city,
            state,
            category1,
            category2,
            category3,
            price
        };

        fetch("http://localhost:9292/giftees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGiftee)
        })
            .then((r) => r.json())
            .then((newGiftee) => {
                onAddGiftee(newGiftee)
            })
    };

    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <h3>Add New Giftee</h3>
                    <label>Name:   </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                    <label>City:   </label>
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    /><br />
                    <label>State:   </label>
                    <input
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    /><br />
                    <label>Category 1:   </label>
                    <select
                        value={category1}
                        onChange={(e) => setCategory1(e.target.value)}
                        >
                        <option disabled>Categories</option>
                        <option>Antiques</option>
                        <option>Automobiles</option>
                        <option>Candy</option>
                        <option>Fashion</option>
                        <option>Flowers</option>
                        <option>Gardening</option>
                        <option>Golfing</option>
                        <option>Liquid Goods</option>
                        <option>Sporting Goods</option>
                        <option>Weapons</option>
                    </select><br />
                    <label>Category 2:   </label>
                    <select
                        value={category2}
                        onChange={(e) => setCategory2(e.target.value)}
                        >
                        <option disabled>Categories</option>
                        <option>Antiques</option>
                        <option>Automobiles</option>
                        <option>Candy</option>
                        <option>Fashion</option>
                        <option>Flowers</option>
                        <option>Gardening</option>
                        <option>Golfing</option>
                        <option>Liquid Goods</option>
                        <option>Sporting Goods</option>
                        <option>Weapons</option>
                    </select><br />
                    <label>Category 3:   </label>
                    <select
                        value={category3}
                        onChange={(e) => setCategory3(e.target.value)}
                        >
                        <option disabled>Categories</option>
                        <option>Antiques</option>
                        <option>Automobiles</option>
                        <option>Candy</option>
                        <option>Fashion</option>
                        <option>Flowers</option>
                        <option>Gardening</option>
                        <option>Golfing</option>
                        <option>Liquid Goods</option>
                        <option>Sporting Goods</option>
                        <option>Weapons</option>
                    </select><br />
                    <label>Price:   </label>
                    <select
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        >
                        <option disabled>Price Options</option>
                        <option>20-100</option>
                        <option>100-250</option>
                        <option>250-1000</option>
                    </select><br /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </section> <br /> <br />
        </div>
    )
}

export default NewGifteeForm;
