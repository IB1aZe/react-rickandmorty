import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function LocationCard({ results }) {
    return (
        <Card
            sx={{
                minWidth: 300,
                maxWidth: 300,
                minHeight: 250,
                margin: ".7rem",
                borderRadius: "3rem",
                backgroundColor: "#2f2f2f",
                color: "white",
            }}
        >
            <CardContent>
                <Typography gutterBottom sx={{ color: "white", fontSize: 14 }}>
                    {results.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {results.type}
                </Typography>
                <Typography variant="body2">{results.dimension}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={results.url}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
