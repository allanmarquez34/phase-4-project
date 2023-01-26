import React, { useEffect } from "react"
import UpdateUser from "./UpdateUser"

function UserAccountPage({user}){
    

    return(
        <div>
            <h1>What do you wanan change now {user.name} 🙄</h1>
            <h2>Update User Information</h2>
            <UpdateUser user={user}/>
        </div>
    )
}

export default UserAccountPage