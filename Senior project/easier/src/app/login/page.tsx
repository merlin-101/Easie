"use client";

import Logo from "../Components/Logo";
import {
  Button,
  TextField,
  ThemeProvider,
  colors,
  createTheme,
} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import styles from "../page.module.css";
import crypto from "crypto";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000",
    },
  },
});

export default function Home() {
  async function onCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = {
      email: formData.get("email") as string,
      password: crypto
        .createHash("md5")
        .update(formData.get("password") as string)
        .digest("hex"),
    };

    const myRequest = new Request("http://127.0.0.1:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const res = await fetch(myRequest);
    console.log(await res.json());
    console.log(await res.body);

    //let tempBody;
    //myRequest.body?.pipeTo(tempBody);

    /*const res = await fetch("http://127.0.0.1:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email") as string,
        password: crypto
          .createHash("md5")
          .update(formData.get("password") as string)
          .digest("hex") as string,
      }),
    });*/
    //const res = await fetch(myRequest);
    //JSON.stringify(await user)
    //console.log(await res.json());

    //let test = await NextResponse.json(res.json());
    //console.log(test);
    //console.log(await myRequest);
  }
  return (
    <>
      <Box>
        <div className="logo logo2">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </Box>
      <div>
        <form onSubmit={onCreate} className={styles.main2}>
          <ThemeProvider theme={theme}>
            <TextField
              id="outlined-basic"
              label="EMAIL"
              name="email"
              variant="outlined"
              margin="normal"
              type="email"
              required={true}
              sx={[
                { backgroundColor: "#eaf2ff" },
                { borderRadius: "4px" },
                { outlineColor: "black" },
              ]}
              color="secondary"
            />
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <TextField
              id="outlined-basic"
              label="PASSWORD"
              variant="outlined"
              margin="normal"
              type="password"
              name="password"
              required={true}
              color="secondary"
              sx={[{ backgroundColor: "#eaf2ff" }, { borderRadius: "4px" }]}
            />
          </ThemeProvider>
          <Link href={"/dashboard"}>
            <Button type="submit" variant="contained">
              LOGIN
            </Button>
          </Link>
        </form>
      </div>
    </>
  );
}
