import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pageTeste1">Page Teste 1</Link>
          <ul></ul>
        </li>
        <li>
          <Link href="/pageTeste2">Teste Pag 2</Link>
        </li>
      </ul>
    </nav>
  );
}
