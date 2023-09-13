import styles from "./page.module.css";
import Logo from "./Components/Logo";
import { Button, Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
      <Typography variant="h4" color={"#f5b841"}>
        Easier: Making web surfing simpler
      </Typography>
      <Link href="/login">
        <Button
          variant="contained"
          sx={{
            marginY: 2,
          }}
        >
          Login
        </Button>
      </Link>
      <Typography color={"#eaf2ff"}>
        or{" "}
        <Link href="/register" color={"#f5b841"}>
          Register
        </Link>
      </Typography>
    </main>
  );
}
