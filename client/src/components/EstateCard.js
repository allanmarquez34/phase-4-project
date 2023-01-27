import React, { useState } from "react"
import {link} from "react-router-dom"
import { useHistory } from "react-router-dom"

function EstateCard({ estates }){

  const history = useHistory();

  function handleOneEstate(){
    history.push(`/estate_sales/${estates.id}`)
  }

    return(
        <li onClick={handleOneEstate}>
            <img src={estates.items[0].image}/>
            <h2>{estates.name}</h2>
            <h3>{estates.created_at}</h3>
        </li>
    );
};

export default EstateCard