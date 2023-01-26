import React, { useState, useEffect } from "react";
// import EstateSalesList from "./EstateSalesList";
// import SearchBar from "./SearchBar";

function EstateSalesPage(){

    const [estates, setEstates] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("/estate_sales")
        .then((r) => r.json())
        .then((estates) => setEstates(estates));
    }, []);

        const itemObjects = estates.map((estate) => {
            return [estate.items]
        })

        const filteredEstates = estates.filter((estate) => {
            let filteredEstatesArr = []
            
        })

    //     const filteredEstates = estates.filter((estate) => {
    //     estate.items.title.toLowerCase().includes(search.toLowerCase())
    // });

    return (
        <div>
            {/* <SearchBar setSearch={setSearch}/> */}
            {/* <EstateSalesList estates={estates}/> */}
        </div>
    );
};

export default EstateSalesPage;