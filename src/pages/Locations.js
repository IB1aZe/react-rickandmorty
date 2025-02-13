import React, { useEffect, useState } from "react";
import ScrollUp from "../components/ScrollUp";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocation } from "../slices/location/action";
import LocationCards from "../components/LocationCards";
import { Pagination } from "@mui/material";

function Locations() {
    const dispatch = useDispatch();
    const info = useSelector((state) => state.location.data.info);

    const [currentPage, setCurrentPage] = useState(1);

    const setPage = (e, p) => {
        setCurrentPage(p);
        dispatch(fetchLocation(p));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        dispatch(fetchLocation(1));
    }, [dispatch]);

    return (
        <div className="App">
            <header className="App-header">
                <section className="Title_wrapper">
                    <h1 className="Title">Rick and Morty Location Cards</h1>
                </section>
                <LocationCards />
                <ScrollUp />
                <section className="Cards-nav">
                    <Pagination
                        page={currentPage}
                        count={info.pages}
                        onChange={setPage}
                    />
                </section>
            </header>
        </div>
    );
}

export default Locations;
