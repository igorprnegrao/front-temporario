import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <img
          src="/images/logo/logopolliticbase1.png"
          alt="logo polbase"
          className={styles.logo}
        />
        <nav className={styles.navContainer}>
          <a href="/#home" className={styles.navLink}>
            Home
          </a>
          <a href="/#about" className={styles.navLink}>
            Sobre nós
          </a>
          <a href="/#features" className={styles.navLink}>
            Funcionalidades
          </a>
          <a href="/#pricing" className={styles.navLink}>
            Planos
          </a>
          <a href="#" className={styles.navLogin}>
            Login
          </a>
          <a href="#" className={styles.navLink}>
            Cadastre-se
          </a>
        </nav>
      </header>
    </>
  );
}
