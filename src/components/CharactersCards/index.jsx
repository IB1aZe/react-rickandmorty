import React from "react";
import { useSelector } from "react-redux";
import CardsSkeleton from "../CardsSkeleton";
import Card from "../CharactersCard";

const CharactersCards = () => {
    const entities = useSelector((state) => state.entities.data.results);
    const loading = useSelector((state) => state.entities.loading);

    return (
        <section className="Cards-section">
            <div className="Cards">
                {loading ? (
                    <CardsSkeleton />
                ) : (
                    entities.map((el) => <Card key={el.id} results={el} />)
                )}
            </div>
        </section>
    );
};

export default CharactersCards;
