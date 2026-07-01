import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <img
          src="/images/logo/logopolliticbase1.png"
          alt="logo polbase"
          className={styles.logo}
        />
        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={handleToggleMenu}
        >
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>
        <nav
          className={`${styles.navContainer} ${menuOpen ? styles.navOpen : ""}`}
        >
          <a href="/#home" className={styles.navLink} onClick={handleCloseMenu}>
            Home
          </a>
          <a
            href="/#about"
            className={styles.navLink}
            onClick={handleCloseMenu}
          >
            Sobre nós
          </a>
          <a
            href="/#features"
            className={styles.navLink}
            onClick={handleCloseMenu}
          >
            Funcionalidades
          </a>
          <a
            href="/#pricing"
            className={styles.navLink}
            onClick={handleCloseMenu}
          >
            Planos
          </a>
          <a href="#" className={styles.navLogin} onClick={handleCloseMenu}>
            Login
          </a>
          <a
            href="/cadastro"
            className={styles.navLink}
            onClick={handleCloseMenu}
          >
            Cadastre-se
          </a>
        </nav>
      </header>
    </>
  );
}
