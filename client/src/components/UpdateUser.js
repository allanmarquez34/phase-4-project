import React, { useState } from "react"

function UpdateUser({user}){
    const [editEmail, setEmail] = useState("");
    const [editPassword, setPassword] = useState("");
    const [editImage, setImage] = useState("");
    const [editName, setName] = useState("");
    const [editAddress, setAddress] = useState("");
    const [editAccount, setEditAccount] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        // console.log(user)
        
        const editAccount = {
            name: editName,
            address: editAddress,
            image: editImage,
            email: editEmail,
            password: editPassword
        }
        fetch(`/me}`, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(editAccount)  
        })
        .then((r) => r.json())
        .then((editAccount) => console.log(editAccount))
                    setEditAccount({
                        email: "",
                        password: ""
                    })
        }

    return(
        <div>
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
            type="text"
            id="name"
            value={editName.name}
            placeholder={user.name}
            autoComplete="off"
            onChange={(e) => setName(e.target.value) } />
        <label>Address</label>
        <input
            type="text"
            id="address"
            value={editAddress.address}
            placeholder={user.address}
            autoComplete="off"
            onChange={(e) => setAddress(e.target.value) } />
        <label>Image</label>
        <input
            type="text"
            id="image"
            value={editImage.image}
            placeholder={user.image}
            autoComplete="off"
            onChange={(e) => setImage(e.target.value) } />
        <label>Email</label>
        <input
            type="text"
            id="email"
            value={editEmail.email}
            placeholder={user.email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value) } />
        <label>Password</label>
        <input
            type="password"
            id="password"
            value={editPassword.password}
<<<<<<< HEAD
            placeholder="please enter password to continue"
=======
            placeholder="input password to continue"
>>>>>>> 69596e18e2d9b3e912e3cb5613f41ad2834b9d63
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value) } />
        <button type="submit" >Update Profile</button>
        </form>
        </div>
    )
}

export default UpdateUser