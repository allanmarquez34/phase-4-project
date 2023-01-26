import React, {useState, useEffect} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import LoginLanding from "./components/LoginLanding"
import Home from "./components/Home"
import EstateSalesPage from "./components/EstateSalesPage"
import IndividualEstate from "./components/IndividualEstate"
import IndividualItemPage from "./components/IndividualItempage"
import UserAccountPage from "./components/UserAccountPage"
import Cart from "./components/Cart"

function App(){
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LoginLanding onLogin={setUser} />;


  return(
    <div>
      <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/estatesales">
          <EstateSalesPage />
        </Route>
        <Route path="estatesales/individualestate/:id">
          <IndividualEstate/>
        </Route>
        <Route path="/individualestate/individualitem/:id">
          <IndividualItemPage/>
        </Route>
        <Route path="/account">
          <UserAccountPage/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
