import Logo from "../Components/Logo";
import { Button, Grid, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";

const cartoes = [
  {
    CardID: 1,
    Titulo: "Facebook",
    Descricao: "Facebook's page",
    tipo: "Social Media",
    Ligacao: "https://www.facebook.com",
    UserID: 1,
    Notif: false,
    timer: "12-09-2023 16:43",
  },
  {
    CardID: 2,
    Titulo: "Youtube",
    Descricao: "Youtube's page",
    tipo: "Social Media",
    Ligacao: "https://www.youtube.com",
    UserID: 1,
    Notif: false,
    timer: "12-09-2023 16:43",
  },
  {
    CardID: 3,
    Titulo: "CNN",
    Descricao: "CNN's page",
    tipo: "News",
    Ligacao: "https://www.cnn.com",
    UserID: 1,
    Notif: false,
    timer: "12-09-2023 16:43",
  },
];

const notifs = [
  {
    CardID: 4,
    Titulo: "Family Dinner",
    Descricao: "Today at 20:00",
    tipo: "",
    Ligacao: "",
    UserID: 1,
    Notif: true,
    timer: "12-09-2023 16:43",
  },
  {
    CardID: 5,
    Titulo: "Reminder",
    Descricao: "Just a reminder for dinner",
    tipo: "",
    Ligacao: "",
    UserID: 1,
    Notif: true,
    timer: "12-09-2023 19:17",
  },
];

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
            {cartoes.map((cartoes) => (
              <Grid item xs={4} key={cartoes.CardID}>
                <Box sx={{ minWidth: 275 }}>
                  <Card variant="outlined">
                    <React.Fragment>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {cartoes.Titulo}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {cartoes.tipo}
                        </Typography>
                        <Typography variant="body2" color={"black"}>
                          {cartoes.Descricao}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Link href={cartoes.Ligacao} target="_blank">
                          <Button variant="contained" size="small">
                            OPEN
                          </Button>
                        </Link>
                      </CardActions>
                    </React.Fragment>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={[{ maxWidth: 2 / 10 }, { margin: 8 }]}>
          <Grid container spacing={2}>
            {notifs.map((notifs) => {
              return (
                <Grid item xs={10} key={notifs.CardID}>
                  <Box>
                    <Card variant="outlined">
                      <React.Fragment>
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            {notifs.timer}
                          </Typography>
                          <Typography variant="h5" component="div">
                            {notifs.Titulo}
                          </Typography>
                          <Typography variant="body2" color={"black"}>
                            {notifs.Descricao}
                          </Typography>
                        </CardContent>
                      </React.Fragment>
                    </Card>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
/*
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
*/
