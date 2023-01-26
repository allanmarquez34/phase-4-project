import React, { useEffect } from "react"
import UpdateUser from "./UpdateUser"

function UserAccountPage({user, setUser}){
    

    return(
        <div>
        <h1>welcome back {user.name} </h1>
        <img src={user.image}/>
        <p>{user.address}</p>
        <p>{user.email}</p>
        <h2>Update Profile Information</h2>
            <UpdateUser user={user} setUser={setUser}/>
        </div>
    )
}

export default UserAccountPage