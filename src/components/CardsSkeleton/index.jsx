import React from "react";
import Skeleton from "@mui/material/Skeleton";

const CardsSkeleton = () => {
    return (
        <>
            {Array.from(Array(6).keys()).map((card) => {
                return (
                    <Skeleton
                        key={card}
                        component={"div"}
                        animation="wave"
                        sx={{
                            height: "220px",
                            width: "600px",
                            transform: "none",
                            m: "0.75rem !important",
                        }}
                    />
                );
            })}
        </>
    );
};

export default CardsSkeleton;
