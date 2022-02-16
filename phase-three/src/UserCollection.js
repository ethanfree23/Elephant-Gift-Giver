import React from "react";
import UserCard from "./UserCard"

function UserCollection() {
    return (
        <div>
            {users.map((user) => {
                return (
                    <UserCard />
                )
            })}
        </div>
    )
}

export default UserCollection;