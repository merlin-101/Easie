"use client";

import Logo from "../Components/Logo";
import { Button, TextField } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import styles from "../page.module.css";
import crypto from "crypto";
import { NextResponse } from "next/server";

export default function Home() {
  async function onCreate(formData: FormData) {
    const user = await {
      email: formData.get("email") as string,
      password: crypto
        .createHash("md5")
        .update(formData.get("password") as string)
        .digest("hex"),
    };
    console.log(user);
    const myRequest = new Request("http://127.0.0.1:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
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
    const res = await fetch(myRequest);
    //JSON.stringify(await user)
    let test = await NextResponse.json(res.json());
    console.log(test);
    //console.log(await myRequest);
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
            LOGIN
          </Button>
        </form>
      </div>
    </>
  );
}
