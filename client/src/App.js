import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import LoginLanding from "./components/LoginLanding"
import Home from "./components/Home"
import EstateSalesList from "./components/EstateSalesList"
import IndividualEstate from "./components/IndividualEstate"
import IndividualItemPage from "./components/IndividualItemPage"
import UserAccountPage from "./components/UserAccountPage"
import Cart from "./components/Cart"

function App(){

  return(
    <div>
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route>
          <LoginLanding/>
        </Route>
        <Route>
          <Home/>
        </Route>
        <Route>
          <EstateSalesList/>
        </Route>
        <Route>
          <IndividualEstate/>
        </Route>
        <Route>
          <IndividualItemPage/>
        </Route>
        <Route>
          <UserAccountPage/>
        </Route>
        <Route>
          <Cart/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
