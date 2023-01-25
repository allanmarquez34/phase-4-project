import React,{useState} from "react"

function SignIn({onLogin}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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
            <label>Email</label>
            <input
            type ="text"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
           <input 
           type="password"
           id="password"
           autoComplete="off"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           />
           <button type="submit">{isLoading ? "Loading..." : "Login"} </button>
           <div>
           {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
        </div>
        </form>
    )

}

export default SignIn