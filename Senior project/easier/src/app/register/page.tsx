"use client";

import Logo from "../Components/Logo";
import { Button, TextField, ThemeProvider, createTheme } from "@mui/material";
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
  async function onCreate(formData: FormData) {
    const user = {
      email: formData.get("email"),
      password: crypto
        .createHash("md5")
        .update(formData.get("password") as string)
        .digest("hex"),
    };
    console.log(user);
  }
  return (
    <>
      <Box>
        <div className="logoTop">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </Box>
      <div>
        <form action={onCreate} className={styles.main2}>
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
              sx={[
                { backgroundColor: "#eaf2ff" },
                { borderRadius: "4px" },
                { outlineColor: "black" },
              ]}
              color="secondary"
            />
          </ThemeProvider>
          <Link href={"/dashboard"}>
            <Button type="submit" variant="contained">
              REGISTER
            </Button>
          </Link>
        </form>
      </div>
    </>
  );
}
