import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Navigate() {
    return (
        <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button href="/">Home</Button>
            <Button href="/locations">Locations</Button>
        </ButtonGroup>
    );
}

export default Navigate;
