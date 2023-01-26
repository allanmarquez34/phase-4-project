import React, { useEffect, useState } from "react"
import LovedItems from "./LovedItems"

function Home(){

    const [lovedItems, setLovedItems] = useState([]);

    useEffect(() => {
        fetch("/home")
        .then((r) => r.json())
        .then((lovedItems) => setLovedItems(lovedItems));
    }, []);

    return (
        <div>
            <LovedItems lovedItems={lovedItems}/>
        </div>
    )
}

export default Home