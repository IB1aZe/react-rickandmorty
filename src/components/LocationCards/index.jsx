import React from "react";
import { useSelector } from "react-redux";
import CardsSkeleton from "../CardsSkeleton";
import LocationCard from "../LocationCard";

const LocationCards = () => {
    const location = useSelector((state) => state.location.data.results);
    const loading = useSelector((state) => state.location.loading);

    return (
        <section className="Cards-section">
            <div className="Cards">
                {loading ? (
                    <CardsSkeleton />
                ) : (
                    location.map((el) => (
                        <LocationCard key={el.id} results={el} />
                    ))
                )}
            </div>
        </section>
    );
};

export default LocationCards;
