import React from "react";

function Form(){
    return (
        <div>
            <section>
                <form>
                    <h3>Add New Person</h3>
                    <label>Name:</label>
                    <input/>
                    <label>Category:</label>
                    <select>
                        <option>Art</option>
                        <option>Automobiles</option>
                        <option>Antiques</option>
                    </select>
                    <label>Price:</label>
                    <select>
                        <option>20-100</option>
                        <option>100-250</option>
                        <option>250-1000</option>
                    </select>
                </form>
            </section>
        </div>
    )
}

export default Form;