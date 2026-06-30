import styles from "./hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section id="home" className={styles.heroContainer}>
        <img
          src="/images/hero/escritoriopolitico.jpg"
          alt="Escritório Político"
          className={styles.heroBackgroundImage}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Uma nova maneira de gerenciar seu gabinte.
          </h1>
          <p className={styles.heroSubtitle}>
            Nossa plataforma simplifica o fluxo de trabalho e aumenta a
            produtividade do seu mandato.
          </p>
          <Link to="/cadastro" className={styles.heroButton}>
            Cadastre-se agora!
          </Link>
        </div>
      </section>
    </>
  );
}
