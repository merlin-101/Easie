import Logo from "../Components/Logo";
import { Button, Grid, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Box>
        <div className="logo">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </Box>
      <Box sx={[{ display: "flex" }, { justifyContent: "space-between" }]}>
        <Box sx={[{ maxWidth: 7 / 10 }, { margin: 8 }]}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={[{ maxWidth: 2 / 10 }, { margin: 8 }]}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Box>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2" color={"black"}>
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);
