"use client";

import Logo from "../Components/Logo";
import { Button, TextField } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import styles from "../page.module.css";
import crypto from "crypto";

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
        <div className="logo">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </Box>
      <div>
        <form action={onCreate} className={styles.main}>
          <TextField
            id="outlined-basic"
            label="EMAIL"
            name="email"
            variant="outlined"
            margin="normal"
            type="email"
            required={true}
          />
          <TextField
            id="outlined-basic"
            label="PASSWORD"
            variant="outlined"
            margin="normal"
            type="password"
            name="password"
            required={true}
          />
          <Button type="submit" variant="contained">
            REGISTER
          </Button>
        </form>
      </div>
    </>
  );
}
