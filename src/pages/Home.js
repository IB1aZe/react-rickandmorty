import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEntities } from "../slices/entities/action";
import CharactersCards from "../components/CharactersCards";
import { Pagination } from "@mui/material";
import ScrollUp from "../components/ScrollUp";

function Home() {
    const dispatch = useDispatch();
    const info = useSelector((state) => state.entities.data.info);

    const [currentPage, setCurrentPage] = useState(1);

    const setPage = (e, p) => {
        setCurrentPage(p);
        dispatch(fetchEntities(p));
    };

    const handleClick = (e) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        dispatch(fetchEntities(1));
    }, [dispatch]);

    return (
        <div className="App">
            <header className="App-header">
                <section className="Title_wrapper">
                    <h1 className="Title">Rick and Morty Persons Cards</h1>
                </section>
                <CharactersCards />
                <ScrollUp />
                <section className="Cards-nav">
                    <Pagination
                        page={currentPage}
                        count={info.pages}
                        onChange={setPage}
                        onClick={handleClick}
                    />
                </section>
            </header>
        </div>
    );
}

export default Home;
