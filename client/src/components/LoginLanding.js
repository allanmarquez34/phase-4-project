import React, {useState} from "react"
import SignUp from "./SignUp"
import SignIn from "./SignIn"


function LoginLanding({onLogin}){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <div>
            <h1>More than Coffins</h1>
            {showLogin ? (
             <div>
                <SignIn onLogin={onLogin}/>
                <p>
                    Dont have an account? &nbsp;
                    <button onClick={() => setShowLogin(false)}>
                     Sign Up
                    </button>
                </p>
             </div>
            ) : (
              <div>
                 <SignUp onLogin={onLogin}/>
                 <p>
                    Already Have an Account? &nbsp;
                    <button onClick={()=> setShowLogin(true)}>
                        Log In
                    </button>
                 </p>
              </div>
            )}
        </div>
    );
}

export default LoginLanding