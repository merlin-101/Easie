import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p color="red">Eas</p>
        <Image
          src="/noun-surfing-5255625.svg"
          alt="Next.js Logo"
          width={180}
          height={180}
          priority
        />
        <p>er</p>
      </div>
      <div className={styles.center}>Easier: Making websurfing simple</div>
    </main>
  );
}
