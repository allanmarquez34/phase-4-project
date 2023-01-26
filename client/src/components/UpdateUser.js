import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

function UpdateUser({user, setUser}){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const {id} = useParams()
    

    function handleEditUser(updatedUser){
        const updatedUsers = user.map((oneUser) => 
        oneUser.id === updatedUser.id ? updatedUser : oneUser
        )
        setUser(updatedUsers)
    }



    function handleSubmit(){
        fetch(`/user/${id}`, {
        method: "PATCH", 
        headers: {
            "content-Type" : "application/json",
        }, 
    body: JSON.stringify(user),
    },)
    .then((r) => r.json())
    .then(handleEditUser)
    }


    return(
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
        type="text"
        id="name"
        value={user.name}
        autoComplete="off"
        onChange={(e) => setName(e.target.value) } />
        <label>Address</label>
        <input
        type="text"
        id="address"
        value={user.address}
        autoComplete="off"
        onChange={(e) => setAddress(e.target.value) } />
        <label>Image</label>
        <input
        type="text"
        id="image"
        value={user.image}
        autoComplete="off"
        onChange={(e) => setImage(e.target.value) } />
        <label>Email</label>
        <input
        type="text"
        id="email"
        value={user.email}
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value) } />
        <label>Password</label>
        <input
        type="password"
        id="password"
        value={password}
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value) } />
        <label>Password confirmation</label>
        <button type="submit">Update Profile</button>
        </form>
    )
}

export default UpdateUser