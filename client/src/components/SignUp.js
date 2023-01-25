import React,{useState} from "react"

function SignUp({onLogin}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    function handleSubmit(e){
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        address,
        email,
        password,
        password_confirmation: passwordConfirmation,

      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return(
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
        type="text"
        id="name"
        value={name}
        autoComplete="off"
        onChange={(e) => setName(e.target.value) } />
        <label>Address</label>
        <input
        type="text"
        id="address"
        value={address}
        autoComplete="off"
        onChange={(e) => setAddress(e.target.value) } />
        <label>Image</label>
        <input
        type="text"
        id="image"
        value={image}
        autoComplete="off"
        onChange={(e) => setImage(e.target.value) } />
        <label>Email</label>
        <input
        type="text"
        id="email"
        value={email}
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
        <input 
        type="password"
        id="password_confirmation"
        autoComplete ="off"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}/>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        <div>
           {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
        </div>
    </form>
  )
}



export default SignUp